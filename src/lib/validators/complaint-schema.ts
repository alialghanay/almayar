import { z } from "zod";

export const complaintFormSchema = z.object({
  formType: z.literal("Complaint Form"),
  type: z.enum(["consultation", "training", "qualification"]),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  job: z.string().min(1, { message: "Job title is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(6, { message: "Phone number is required." }),
  complaintSubject: z
    .string()
    .min(1, { message: "Complaint subject is required." }),
});

export type ComplaintFormSchema = z.infer<typeof complaintFormSchema>;
