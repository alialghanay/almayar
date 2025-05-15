import { useTranslations } from "next-intl";
import type { Navs } from "global";

export default function useNavbar(): Navs {
  const t = useTranslations("Navs");

  return {
    HomePage: {
      title: t("home"),
      url: "/",
    },
    ServicesPage: {
      title: t("services"),
      url: "/services",
    },
    CertificatesPage: {
      title: t("certificates"),
      url: "/certificates",
    },
    ContactUsPage: {
      title: t("contact-us"),
      url: "/contact-us",
    },
  };
}
