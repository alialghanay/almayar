import { createTransporter, getEmailConfig } from "./config";
import {
  generateComplaintEmailTemplate,
  generateQualificationEmailTemplate,
  generateTrainingEmailTemplate,
} from "./templates";
import { ComplaintFormSchema } from "@/lib/validators/complaint-schema";
import { QualificationFormSchema } from "@/lib/validators/qualifications-schema";
import { TrainingFormSchema } from "@/lib/validators/training-schema";
import { v4 as uuidv4 } from "uuid";
import type { Attachment } from "nodemailer/lib/mailer";

export interface EmailResult {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

export class EmailService {
  private transporter;
  private config;

  constructor() {
    this.config = getEmailConfig();
    this.transporter = createTransporter();
  }

  private async sendEmail(
    subject: string,
    html: string,
    text: string,
    attachments?: Attachment[]
  ): Promise<EmailResult> {
    try {
      const mailOptions = {
        from: this.config.from,
        to: this.config.to,
        subject,
        html,
        text,
        attachments: attachments || [],
        headers: {
          "X-Request-ID": uuidv4(),
          "X-Source": "Al Mayar Website",
        },
      };

      const info = await this.transporter.sendMail(mailOptions);

      return {
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      };
    } catch (error) {
      console.error("Email sending error:", error);
      return {
        success: false,
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendComplaintForm(data: ComplaintFormSchema): Promise<EmailResult> {
    try {
      const template = generateComplaintEmailTemplate(data);
      return await this.sendEmail(
        template.subject,
        template.html,
        template.text
      );
    } catch (error) {
      console.error("Complaint form email error:", error);
      return {
        success: false,
        message: "Failed to process complaint form",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendQualificationForm(
    data: QualificationFormSchema
  ): Promise<EmailResult> {
    try {
      const template = generateQualificationEmailTemplate(data);
      const attachments: Attachment[] = [];

      // Handle file upload if present
      if (data.additionalInfo.upload) {
        const file = data.additionalInfo.upload;

        // Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        attachments.push({
          filename: file.name || "qualification-document",
          content: buffer,
        });
      }

      return await this.sendEmail(
        template.subject,
        template.html,
        template.text,
        attachments
      );
    } catch (error) {
      console.error("Qualification form email error:", error);
      return {
        success: false,
        message: "Failed to process qualification form",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendTrainingForm(data: TrainingFormSchema): Promise<EmailResult> {
    try {
      const template = generateTrainingEmailTemplate(data);
      return await this.sendEmail(
        template.subject,
        template.html,
        template.text
      );
    } catch (error) {
      console.error("Training form email error:", error);
      return {
        success: false,
        message: "Failed to process training form",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  // Send confirmation email to the form submitter
  async sendConfirmationEmail(
    recipientEmail: string,
    formType: "complaint" | "qualification" | "training"
  ): Promise<EmailResult> {
    try {
      const confirmationTemplates = {
        complaint: {
          subject: "Thank you for your complaint submission - Al Mayar",
          message:
            "We have received your complaint and will review it promptly. Our team will contact you within 2-3 business days.",
        },
        qualification: {
          subject: "Thank you for your qualification request - Al Mayar",
          message:
            "We have received your qualification request. Our qualification team will review your application and contact you within 5-7 business days with next steps.",
        },
        training: {
          subject: "Thank you for your training request - Al Mayar",
          message:
            "We have received your training needs assessment. Our training coordinator will contact you within 3-5 business days to discuss your requirements.",
        },
      };

      const template = confirmationTemplates[formType];

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${template.subject}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3498db; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px 20px; background-color: #f9f9f9; }
            .footer { background-color: #2c3e50; color: white; padding: 15px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Al Mayar</h1>
              <h2>Thank You for Your Submission</h2>
            </div>
            
            <div class="content">
              <p>Dear Valued Client,</p>
              <p>${template.message}</p>
              <p>If you have any urgent questions, please don't hesitate to contact us at:</p>
              <ul>
                <li>Email: ${this.config.to}</li>
                <li>Phone: [Your phone number]</li>
              </ul>
              <p>Thank you for choosing Al Mayar for your ${formType} needs.</p>
              <p>Best regards,<br>The Al Mayar Team</p>
            </div>
            
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Al Mayar. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      const text = `
Thank You for Your Submission - Al Mayar

Dear Valued Client,

${template.message}

If you have any urgent questions, please don't hesitate to contact us at:
- Email: ${this.config.to}
- Phone: [Your phone number]

Thank you for choosing Al Mayar for your ${formType} needs.

Best regards,
The Al Mayar Team

© ${new Date().getFullYear()} Al Mayar. All rights reserved.
      `;

      const mailOptions = {
        from: this.config.from,
        to: recipientEmail,
        subject: template.subject,
        html,
        text,
        headers: {
          "X-Request-ID": uuidv4(),
          "X-Source": "Al Mayar Website - Confirmation",
        },
      };

      const info = await this.transporter.sendMail(mailOptions);

      return {
        success: true,
        message: "Confirmation email sent successfully",
        messageId: info.messageId,
      };
    } catch (error) {
      console.error("Confirmation email error:", error);
      return {
        success: false,
        message: "Failed to send confirmation email",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

// Singleton instance
export const emailService = new EmailService();
