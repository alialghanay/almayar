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
import { useTranslations } from "next-intl";

const QualificationForm = () => {
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
  const t = useTranslations("FormPages.QualificationRequestForm");
  return (
    <FormProvider {...methods}>
      <article className="py-28 px-12 md:px-16 flex flex-col gap-8 mx-auto">
        <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
        <p className="text-gray-600 mb-8">{t("description")}</p>
        <OrganizationInfo />
        <Systems />
        <Employees />
        <AdditionalInfo />
      </article>
    </FormProvider>
  );
};

export default QualificationForm;
