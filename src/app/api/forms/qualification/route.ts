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

    // Parse request body
    const body = await request.json();

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
