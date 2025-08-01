import { NextRequest, NextResponse } from "next/server";
import { testEmailConnection } from "@/lib/email/config";
import { formSubmissionLimiter } from "@/lib/utils/rate-limiter";

export async function GET(request: NextRequest) {
  try {
    // Apply light rate limiting for health checks too
    const rateLimitResult = formSubmissionLimiter.checkRateLimit(request);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded",
          message: "Too many health check requests",
        },
        { status: 429 }
      );
    }

    // Test email connection
    const testResult = await testEmailConnection();

    return NextResponse.json(
      {
        success: testResult.success,
        message: testResult.message,
        timestamp: new Date().toISOString(),
      },
      {
        status: testResult.success ? 200 : 500,
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
    console.error("Email health check error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Health check failed",
        message: "Unable to verify email configuration",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
