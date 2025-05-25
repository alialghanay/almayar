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
import { useTranslations } from "next-intl";

const programs = [
  {
    name: "",
    preferredTime: "",
    location: "internal" as "internal",
  },
  {
    name: "",
    preferredTime: "",
    location: "internal" as "internal",
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
  const t = useTranslations("FormPages.TrainingNeedsForm");
  return (
    <FormProvider {...methods}>
      <article className="flex flex-col gap-8 mx-auto">
        <h2 className="mb-2">{t("title")}</h2>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          {t("description")}
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-8"></p>
        <form className="flex flex-col gap-4 bg-card rounded-lg shadow-md pt-6 pb-4">
          <h3 className="mb-4">{t("fields.requestedPrograms")}</h3>
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
        </form>
        <form className="flex flex-col gap-4 bg-card rounded-lg shadow-md pt-6 pb-4">
          <h3 className="mb-4">{t("fields.candidates")}</h3>
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
        </form>
        <Preparation />
      </article>
    </FormProvider>
  );
};

export default TrainingForm;
