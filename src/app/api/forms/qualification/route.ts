import { NextRequest, NextResponse } from "next/server";
import { emailService } from "@/lib/email/service";
import { qualificationFormSchema } from "@/lib/validators/qualifications-schema";
import {
  formSubmissionLimiter,
  createRateLimitResponse,
} from "@/lib/utils/rate-limiter";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitResult = formSubmissionLimiter.checkRateLimit(request);

    if (!rateLimitResult.allowed) {
      return createRateLimitResponse(rateLimitResult.retryAfter || 900);
    }

    // Parse request body (handle both JSON and FormData)
    let body: Record<string, unknown>;
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = {};
      
      // Convert FormData to nested object structure
      for (const [key, value] of formData.entries()) {
        if (key.includes('.')) {
          // Handle nested objects like "organizationInfo.name"
          const keys = key.split('.');
          let current: Record<string, unknown> = body;
          
          for (let i = 0; i < keys.length - 1; i++) {
            const currentKey = keys[i];
            if (!current[currentKey]) {
              current[currentKey] = {};
            }
            current = current[currentKey] as Record<string, unknown>;
          }
          
          const finalKey = keys[keys.length - 1];
          if (value instanceof File) {
            current[finalKey] = value;
          } else {
            // Convert numeric strings back to numbers only for specific numeric fields
            const strValue = value.toString();
            const isNumericField = finalKey.match(/^(management|qualityDept|workers|other|branchesCount)$/);
            current[finalKey] = isNumericField && !isNaN(Number(strValue)) && strValue !== '' 
              ? Number(strValue) 
              : strValue;
          }
        } else if (key.includes('[') && key.includes(']')) {
          // Handle arrays like "systems[0]"
          const arrayKey = key.substring(0, key.indexOf('['));
          const indexStr = key.substring(key.indexOf('[') + 1, key.indexOf(']'));
          const index = parseInt(indexStr, 10);
          
          if (!body[arrayKey]) {
            body[arrayKey] = [];
          }
          
          (body[arrayKey] as unknown[])[index] = value;
        } else {
          // Handle simple fields
          if (value instanceof File) {
            body[key] = value;
          } else {
            // Convert numeric strings back to numbers only for specific numeric fields
            const strValue = value.toString();
            const isNumericField = key.match(/^(management|qualityDept|workers|other|branchesCount)$/);
            body[key] = isNumericField && !isNaN(Number(strValue)) && strValue !== '' 
              ? Number(strValue) 
              : strValue;
          }
        }
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Unsupported content type",
          message: "Request must be JSON or multipart/form-data",
        },
        { status: 400 }
      );
    }

    // Validate form data
    const validatedData = qualificationFormSchema.parse(body);

    // Send email to admin
    const emailResult = await emailService.sendQualificationForm(validatedData);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery failed",
          message: emailResult.message,
        },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationResult = await emailService.sendConfirmationEmail(
      validatedData.organizationInfo.email,
      "qualification"
    );

    // Don't fail the request if confirmation email fails
    if (!confirmationResult.success) {
      console.warn(
        "Failed to send confirmation email:",
        confirmationResult.error
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Qualification form submitted successfully",
        data: {
          messageId: emailResult.messageId,
          confirmationSent: confirmationResult.success,
        },
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": new Date(
            rateLimitResult.resetTime
          ).toISOString(),
        },
      }
    );
  } catch (error) {
    console.error("Qualification form submission error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          message: "Please check your form data",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
            code: err.code,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
