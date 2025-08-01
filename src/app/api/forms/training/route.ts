import { NextRequest, NextResponse } from "next/server";
import { emailService } from "@/lib/email/service";
import { trainingFormSchema } from "@/lib/validators/training-schema";
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
    const validatedData = trainingFormSchema.parse(body);

    // Send email to admin
    const emailResult = await emailService.sendTrainingForm(validatedData);

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

    // For training forms, we don't have a direct email field, so we skip confirmation email
    // You could add an organization contact email field to the training schema if needed

    return NextResponse.json(
      {
        success: true,
        message: "Training form submitted successfully",
        data: {
          messageId: emailResult.messageId,
          confirmationSent: false, // No email to send confirmation to
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
    console.error("Training form submission error:", error);

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
