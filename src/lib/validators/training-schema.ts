import { z } from "zod";

const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
export const locationOptions: string[] = ["internal", "external"] as const;

export const trainingFormSchema = z.object({
  programs: z.array(
    z.object({
      name: z.string().min(1, { message: "Program name is required." }),
      preferredTime: z
        .string()
        .min(1, { message: "Preferred time is required." })
        .regex(timeRegex, {
          message: "Invalid time format. Use HH:MM format.",
        }),
      location: z.enum(["internal", "external"]),
    })
  ),
  candidates: z.array(
    z.object({
      name: z.string().min(1, { message: "Candidate name is required." }),
      department: z.string().min(1, { message: "Department is required." }),
      program: z.string().min(1, { message: "Program name is required." }),
    })
  ),
  preparation: z.object({
    organizationName: z
      .string()
      .min(1, { message: "Organization name is required." }),
    notes: z.string().optional(),
  }),
});

export type TrainingFormSchema = z.infer<typeof trainingFormSchema>;
