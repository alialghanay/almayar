import SectionOne from "@/components/certificates/section-one";
import SectionTwo from "@/components/certificates/section-two";
import PageContiner from "@/components/ui/page-continer";
import { useTranslations } from "next-intl";

export default function CertificatesPage() {
  const t = useTranslations("HomePage");
  return (
    <PageContiner>
      <SectionOne />
      <SectionTwo />
    </PageContiner>
  );
}
