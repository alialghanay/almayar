import SectionOne from "@/components/services/training/section-one";
import SectionTwo from "@/components/services/training/section-two";
import SectionThree from "@/components/services/training/section-three";
import PageContiner from "@/components/ui/page-continer";
import { useTranslations } from "next-intl";

export default function TrainingServicesPage() {
  const t = useTranslations("HomePage");
  return (
    <PageContiner>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </PageContiner>
  );
}
