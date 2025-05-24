import { z } from "zod";

export const systems: string[] = [
  "ISO_9001",
  "ISO_14001",
  "ISO_22000",
  "ISO_17020",
  "ISO_45001",
  "ISO_7101",
  "ISO_15189",
  "ISO_17025",
] as const;

export const qualificationFormSchema = z.object({
  organizationInfo: z.object({
    name: z.string().min(1, { message: "Organization name is required." }),
    address: z.string().min(1, { message: "Address is required." }),
    phone: z.string().min(6, { message: "Phone number is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    location: z.string().optional(),
  }),
  systems: z
    .array(
      z.enum([
        "ISO_9001",
        "ISO_14001",
        "ISO_22000",
        "ISO_17020",
        "ISO_45001",
        "ISO_7101",
        "ISO_15189",
        "ISO_17025",
      ])
    )
    .min(1, { message: "Select at least one applicable system." }),
  employees: z.object({
    management: z.number().nonnegative(),
    qualityDept: z.number().nonnegative(),
    workers: z.number().nonnegative(),
    other: z.number().nonnegative(),
    branchesCount: z.number().nonnegative(),
    branchName: z.string().min(1, { message: "Branch name is required." }),
  }),
  additionalInfo: z.object({
    productInfo: z
      .string()
      .min(1, { message: "Product/service info is required." }),
    upload: z.any().optional(), // you can refine this for file type later
  }),
});

export type QualificationFormSchema = z.infer<typeof qualificationFormSchema>;
