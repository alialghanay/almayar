import { NextRequest } from "next/server";

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests = 5, windowMs = 15 * 60 * 1000) {
    // 5 requests per 15 minutes
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  private getClientIdentifier(request: NextRequest): string {
    // Get client IP address
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const cfConnectingIp = request.headers.get("cf-connecting-ip");

    const ip = forwarded
      ? forwarded.split(",")[0]
      : realIp || cfConnectingIp || "unknown";

    return ip.trim();
  }

  private cleanupExpiredEntries(): void {
    const now = Date.now();
    Object.keys(this.store).forEach((key) => {
      if (this.store[key].resetTime <= now) {
        delete this.store[key];
      }
    });
  }

  checkRateLimit(request: NextRequest): {
    allowed: boolean;
    remaining: number;
    resetTime: number;
    retryAfter?: number;
  } {
    this.cleanupExpiredEntries();

    const clientId = this.getClientIdentifier(request);
    const now = Date.now();
    const resetTime = now + this.windowMs;

    if (!this.store[clientId]) {
      this.store[clientId] = {
        count: 1,
        resetTime,
      };

      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime,
      };
    }

    const clientData = this.store[clientId];

    // If the window has expired, reset the counter
    if (clientData.resetTime <= now) {
      clientData.count = 1;
      clientData.resetTime = resetTime;

      return {
        allowed: true,
        remaining: this.maxRequests - 1,
        resetTime,
      };
    }

    // Increment the counter
    clientData.count++;

    const remaining = Math.max(0, this.maxRequests - clientData.count);
    const allowed = clientData.count <= this.maxRequests;

    const result = {
      allowed,
      remaining,
      resetTime: clientData.resetTime,
    };

    if (!allowed) {
      return {
        ...result,
        retryAfter: Math.ceil((clientData.resetTime - now) / 1000),
      };
    }

    return result;
  }

  // Reset rate limit for a specific client (useful for testing or admin override)
  resetClient(request: NextRequest): void {
    const clientId = this.getClientIdentifier(request);
    delete this.store[clientId];
  }

  // Get current status for a client
  getClientStatus(request: NextRequest): {
    count: number;
    remaining: number;
    resetTime: number;
  } {
    const clientId = this.getClientIdentifier(request);
    const clientData = this.store[clientId];

    if (!clientData) {
      return {
        count: 0,
        remaining: this.maxRequests,
        resetTime: Date.now() + this.windowMs,
      };
    }

    return {
      count: clientData.count,
      remaining: Math.max(0, this.maxRequests - clientData.count),
      resetTime: clientData.resetTime,
    };
  }
}

// Export different rate limiters for different use cases
export const formSubmissionLimiter = new RateLimiter(5, 15 * 60 * 1000); // 5 forms per 15 minutes
export const emailLimiter = new RateLimiter(10, 60 * 60 * 1000); // 10 emails per hour

// Helper function to create rate limit response
export const createRateLimitResponse = (retryAfter: number) => {
  return new Response(
    JSON.stringify({
      success: false,
      error: "Rate limit exceeded",
      message: `Too many requests. Please try again in ${retryAfter} seconds.`,
      retryAfter,
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": retryAfter.toString(),
        "X-RateLimit-Limit": "5",
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": new Date(
          Date.now() + retryAfter * 1000
        ).toISOString(),
      },
    }
  );
};
