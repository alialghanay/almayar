import { FormProvider, useForm } from "react-hook-form";
import {
  QualificationFormSchema,
  qualificationFormSchema,
} from "@/lib/validators/qualifications-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import OrganizationInfo from "./organization-info";
import Systems from "./systems";
import Employees from "./employees";
import AdditionalInfo from "./additional-info";
import SubmitButton from "./submit-button";
import { useTranslations } from "next-intl";
import { useQualificationFormSubmission } from "@/hooks/use-form-submission";
import { useState } from "react";
import { CheckCircleIcon, AlertCircleIcon } from "lucide-react";

const QualificationForm = () => {
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const { isSubmitting, submitForm } = useQualificationFormSubmission();

  const methods = useForm<QualificationFormSchema>({
    resolver: zodResolver(qualificationFormSchema),
    defaultValues: {
      organizationInfo: {
        name: "",
        address: "",
        phone: "",
        email: "",
        location: "",
      },
      systems: [],
      employees: {
        management: 0,
        qualityDept: 0,
        workers: 0,
        other: 0,
        branchesCount: 0,
        branchName: "",
      },
      additionalInfo: {
        productInfo: "",
        upload: null,
      },
    },
  });

  const onSubmit = async (data: QualificationFormSchema) => {
    const result = await submitForm(data);

    if (result.success) {
      setNotification({
        type: "success",
        message: t("notifications.success"),
      });
      methods.reset();
    } else {
      setNotification({
        type: "error",
        message: result.message,
      });
    }

    // Auto-hide notification after 7 seconds
    setTimeout(() => setNotification(null), 7000);
  };

  const t = useTranslations("FormPages.QualificationRequestForm");
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <article className="py-28 px-12 md:px-16 flex flex-col gap-8 mx-auto">
          <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
          <p className="text-gray-600 mb-8">{t("description")}</p>
          <OrganizationInfo />
          <Systems />
          <Employees />
          <AdditionalInfo />

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

          <SubmitButton isSubmitting={isSubmitting} />
        </article>
      </form>
    </FormProvider>
  );
};

export default QualificationForm;
