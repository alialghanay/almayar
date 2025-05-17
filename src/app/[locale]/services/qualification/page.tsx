import SectionOne from "@/components/services/qualification/section-one";
import PageContiner from "@/components/ui/page-continer";
import { useTranslations } from "next-intl";

export default function QualificationServicesPage() {
  const t = useTranslations("HomePage");
  return (
    <PageContiner>
      <SectionOne />
    </PageContiner>
  );
}
