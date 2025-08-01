import { emailService } from "@/lib/email/service";
import { testEmailConnection } from "@/lib/email/config";
import { ComplaintFormSchema } from "@/lib/validators/complaint-schema";
import { QualificationFormSchema } from "@/lib/validators/qualifications-schema";
import { TrainingFormSchema } from "@/lib/validators/training-schema";

const testData = {
  complaint: {
    formType: "Complaint Form" as const,
    type: "consultation" as const,
    firstName: "Ahmed",
    lastName: "Mohamed",
    job: "Quality Manager",
    email: "ahmed.mohamed@example.com",
    phone: "+218912345678",
    complaintSubject:
      "This is a test complaint submission to verify the email functionality is working correctly.",
  } as ComplaintFormSchema,

  qualification: {
    organizationInfo: {
      name: "Test Manufacturing Company",
      address: "Tripoli, Libya",
      phone: "+218912345678",
      email: "contact@testcompany.ly",
      location: "Tripoli Industrial Zone",
    },
    systems: ["ISO_9001", "ISO_14001"] as const,
    employees: {
      management: 5,
      qualityDept: 3,
      workers: 25,
      other: 7,
      branchesCount: 2,
      branchName: "Main Branch",
    },
    additionalInfo: {
      productInfo:
        "Manufacturing of electrical components and testing equipment.",
      upload: null,
    },
  } as QualificationFormSchema,

  training: {
    programs: [
      {
        name: "ISO 9001 Implementation",
        preferredTime: "09:00 AM",
        location: "internal" as const,
      },
      {
        name: "Quality Management Training",
        preferredTime: "02:00 PM",
        location: "external" as const,
      },
    ],
    candidates: [
      {
        name: "Sara Ahmed",
        department: "Quality Department",
        program: "ISO 9001 Implementation",
      },
      {
        name: "Omar Hassan",
        department: "Production",
        program: "Quality Management Training",
      },
    ],
    preparation: {
      organizationName: "Test Training Organization",
      notes:
        "This is a test training request to verify the email functionality.",
    },
  } as TrainingFormSchema,
};

export class EmailTester {
  async testEmailConfiguration(): Promise<{
    success: boolean;
    message: string;
  }> {
    console.log("🔍 Testing email configuration...");

    try {
      const result = await testEmailConnection();
      console.log(result.success ? "✅" : "❌", result.message);
      return result;
    } catch (error) {
      const message = `Email configuration test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log("❌", message);
      return {
        success: false,
        message,
      };
    }
  }

  async testComplaintFormEmail(): Promise<{
    success: boolean;
    message: string;
    messageId?: string;
  }> {
    console.log("📧 Testing complaint form email...");

    try {
      const result = await emailService.sendComplaintForm(testData.complaint);
      console.log(result.success ? "✅" : "❌", result.message);
      return result;
    } catch (error) {
      const message = `Complaint form email test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log("❌", message);
      return {
        success: false,
        message,
      };
    }
  }

  async testQualificationFormEmail(): Promise<{
    success: boolean;
    message: string;
    messageId?: string;
  }> {
    console.log("📧 Testing qualification form email...");

    try {
      const result = await emailService.sendQualificationForm(
        testData.qualification
      );
      console.log(result.success ? "✅" : "❌", result.message);
      return result;
    } catch (error) {
      const message = `Qualification form email test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log("❌", message);
      return {
        success: false,
        message,
      };
    }
  }

  async testTrainingFormEmail(): Promise<{
    success: boolean;
    message: string;
    messageId?: string;
  }> {
    console.log("📧 Testing training form email...");

    try {
      const result = await emailService.sendTrainingForm(testData.training);
      console.log(result.success ? "✅" : "❌", result.message);
      return result;
    } catch (error) {
      const message = `Training form email test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log("❌", message);
      return {
        success: false,
        message,
      };
    }
  }

  async testConfirmationEmail(): Promise<{
    success: boolean;
    message: string;
    messageId?: string;
  }> {
    console.log("📧 Testing confirmation email...");

    try {
      const result = await emailService.sendConfirmationEmail(
        testData.complaint.email,
        "complaint"
      );
      console.log(result.success ? "✅" : "❌", result.message);
      return result;
    } catch (error) {
      const message = `Confirmation email test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log("❌", message);
      return {
        success: false,
        message,
      };
    }
  }

  async runAllTests(): Promise<{
    configTest: boolean;
    complaintTest: boolean;
    qualificationTest: boolean;
    trainingTest: boolean;
    confirmationTest: boolean;
    overallSuccess: boolean;
  }> {
    console.log("🚀 Starting comprehensive email functionality tests...\n");

    const configResult = await this.testEmailConfiguration();
    const complaintResult = await this.testComplaintFormEmail();
    const qualificationResult = await this.testQualificationFormEmail();
    const trainingResult = await this.testTrainingFormEmail();
    const confirmationResult = await this.testConfirmationEmail();

    const results = {
      configTest: configResult.success,
      complaintTest: complaintResult.success,
      qualificationTest: qualificationResult.success,
      trainingTest: trainingResult.success,
      confirmationTest: confirmationResult.success,
      overallSuccess:
        configResult.success &&
        complaintResult.success &&
        qualificationResult.success &&
        trainingResult.success &&
        confirmationResult.success,
    };

    console.log("\n📊 Test Results Summary:");
    console.log("========================");
    console.log(
      "Email Configuration:",
      results.configTest ? "✅ PASS" : "❌ FAIL"
    );
    console.log(
      "Complaint Form:",
      results.complaintTest ? "✅ PASS" : "❌ FAIL"
    );
    console.log(
      "Qualification Form:",
      results.qualificationTest ? "✅ PASS" : "❌ FAIL"
    );
    console.log("Training Form:", results.trainingTest ? "✅ PASS" : "❌ FAIL");
    console.log(
      "Confirmation Email:",
      results.confirmationTest ? "✅ PASS" : "❌ FAIL"
    );
    console.log("========================");
    console.log(
      "Overall Result:",
      results.overallSuccess ? "✅ ALL TESTS PASSED" : "❌ SOME TESTS FAILED"
    );

    return results;
  }
}

// Export a singleton instance
export const emailTester = new EmailTester();
