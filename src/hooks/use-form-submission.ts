import { useState } from "react";
import axios from "axios";
import { ComplaintFormSchema } from "@/lib/validators/complaint-schema";
import { QualificationFormSchema } from "@/lib/validators/qualifications-schema";
import { TrainingFormSchema } from "@/lib/validators/training-schema";

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: {
    messageId: string;
    confirmationSent: boolean;
  };
  error?: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}

export interface UseFormSubmissionReturn<T> {
  isSubmitting: boolean;
  submitForm: (data: T) => Promise<FormSubmissionResult>;
  lastSubmission: FormSubmissionResult | null;
  resetSubmission: () => void;
}

export function useFormSubmission<
  T extends ComplaintFormSchema | QualificationFormSchema | TrainingFormSchema
>(
  formType: "complaint" | "qualification" | "training"
): UseFormSubmissionReturn<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] =
    useState<FormSubmissionResult | null>(null);

  const submitForm = async (data: T): Promise<FormSubmissionResult> => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(`/api/forms/${formType}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 seconds timeout
      });

      const result: FormSubmissionResult = response.data;
      setLastSubmission(result);
      return result;
    } catch (error) {
      let result: FormSubmissionResult;

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with error status
          result = {
            success: false,
            message: error.response.data?.message || "Server error occurred",
            error: error.response.data?.error || "Unknown server error",
            details: error.response.data?.details || [],
          };
        } else if (error.request) {
          // Request was made but no response received
          result = {
            success: false,
            message:
              "No response from server. Please check your internet connection.",
            error: "Network error",
          };
        } else {
          // Something happened in setting up the request
          result = {
            success: false,
            message: "Failed to send request. Please try again.",
            error: error.message,
          };
        }
      } else {
        result = {
          success: false,
          message: "An unexpected error occurred. Please try again.",
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }

      setLastSubmission(result);
      return result;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmission = () => {
    setLastSubmission(null);
  };

  return {
    isSubmitting,
    submitForm,
    lastSubmission,
    resetSubmission,
  };
}

// Specific hooks for each form type
export const useComplaintFormSubmission = () =>
  useFormSubmission<ComplaintFormSchema>("complaint");

export const useQualificationFormSubmission = () =>
  useFormSubmission<QualificationFormSchema>("qualification");

export const useTrainingFormSubmission = () =>
  useFormSubmission<TrainingFormSchema>("training");
