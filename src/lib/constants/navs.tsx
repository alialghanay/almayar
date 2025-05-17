import { useTranslations } from "next-intl";
import type { Navs } from "global";

export default function useNavbar(): Navs {
  const t = useTranslations("Navs");

  return {
    HomePage: {
      title: t("home"),
      url: "/",
      type: "link",
    },
    ServicesPage: {
      title: t("services"),
      url: "/services",
      type: "dropdown",
      children: {
        TrainingServicesPage: {
          title: t("training"),
          url: "/services/training",
          type: "link",
        },
        QualificationServicesPage: {
          title: t("qualification"),
          url: "/services/qualification",
          type: "link",
        },
      },
    },
    CertificatesPage: {
      title: t("certificates"),
      url: "/certificates",
      type: "link",
    },
    ContactUsPage: {
      title: t("contact-us"),
      url: "/contact-us",
      type: "link",
    },
  };
}
