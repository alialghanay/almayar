import { FormProvider, useForm } from "react-hook-form";
import {
  TrainingFormSchema,
  trainingFormSchema,
} from "@/lib/validators/training-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Programs from "./programs";
import { useState } from "react";
import Candidates from "./candidates";
import Preparation from "./preparation";
import TrainingSubmitButton from "./submit-button";
import { useTranslations } from "next-intl";
import { useTrainingFormSubmission } from "@/hooks/use-form-submission";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";

interface Program {
  name: string;
  preferredTime: string;
  location: "internal" | "external";
}

const programs: Program[] = [
  {
    name: "",
    preferredTime: "",
    location: "internal",
  },
  {
    name: "",
    preferredTime: "",
    location: "internal",
  },
];

const candidates = [
  {
    name: "",
    program: "",
    department: "",
  },
  {
    name: "",
    program: "",
    department: "",
  },
];

const TrainingForm = () => {
  const [programsCount, setProgramsCount] = useState(programs.length);
  const [candidatesCount, setCandidatesCount] = useState(candidates.length);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const { isSubmitting, submitForm } = useTrainingFormSubmission();

  const methods = useForm<TrainingFormSchema>({
    resolver: zodResolver(trainingFormSchema),
    defaultValues: {
      programs: [...programs],
      candidates: [...candidates],
      preparation: {
        organizationName: "",
        notes: "",
      },
    },
  });

  const onSubmit = async (data: TrainingFormSchema) => {
    const result = await submitForm(data);

    if (result.success) {
      setNotification({
        type: "success",
        message: t("notifications.success"),
      });
      methods.reset();
      // Reset counts to default
      setProgramsCount(programs.length);
      setCandidatesCount(candidates.length);
    } else {
      setNotification({
        type: "error",
        message: result.message,
      });
    }

    // Auto-hide notification after 7 seconds
    setTimeout(() => setNotification(null), 7000);
  };

  const t = useTranslations("FormPages.TrainingNeedsForm");
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <article className="py-28 px-12 md:px-16 flex flex-col gap-8 mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8">
            {t("description")}
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8"></p>
          <div className="flex flex-col gap-4 bg-card rounded-lg shadow-md pt-6 pb-4">
            <h3 className="mx-6 text-xl font-semibold border-b pb-2 mb-4">
              {t("fields.requestedPrograms")}
            </h3>
            {Array.from({ length: programsCount }).map((_, index) => (
              <Programs
                key={index}
                index={index}
                addProgram={() => setProgramsCount(programsCount + 1)}
                removeProgram={() => {
                  if (programsCount > 1) {
                    setProgramsCount(programsCount - 1);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 bg-card rounded-lg shadow-md pt-6 pb-4">
            <h3 className="mx-6 text-xl font-semibold border-b pb-2 mb-4">
              {t("fields.candidates")}
            </h3>
            {Array.from({ length: candidatesCount }).map((_, index) => (
              <Candidates
                key={index}
                index={index}
                addCandidates={() => setCandidatesCount(candidatesCount + 1)}
                removeCandidates={() => {
                  if (candidatesCount > 1) {
                    setCandidatesCount(candidatesCount - 1);
                  }
                }}
              />
            ))}
          </div>
          <Preparation />

          {notification && (
            <div className="mx-6">
              {notification.type === "success" ? (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-md border border-green-200">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{notification.message}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-md border border-red-200">
                  <AlertCircleIcon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{notification.message}</span>
                </div>
              )}
            </div>
          )}

          <TrainingSubmitButton isSubmitting={isSubmitting} />
        </article>
      </form>
    </FormProvider>
  );
};

export default TrainingForm;
