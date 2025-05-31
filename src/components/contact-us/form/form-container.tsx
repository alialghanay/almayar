"use client";

import { useSearchParams } from "next/navigation";
import ComplaintForm from "./complaint/complaint";
import QualificationForm from "./qualifications/qualification-form";
import TrainingForm from "./training/training-form";

const FormContianer = () => {
  const prams = useSearchParams();
  const formType = prams.get("formType");
  switch (formType) {
    case "qualification":
      return <QualificationForm />;
    case "complaint":
      return <ComplaintForm />;
    case "training":
      return <TrainingForm />;
    default:
      return null;
  }
};

export default FormContianer;
