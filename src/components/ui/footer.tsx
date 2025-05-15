import { useTranslations } from "next-intl";
import LogoRender from "./footer/logo-render";
import QuickLinks from "./footer/quick-links";
import Socials from "./footer/socials";
import SocialsIcons from "./footer/socials-icons";
import FooterRelated from "./footer/footer-realted";

const Footer = () => {
  const t = useTranslations("common");
  const tfooter = useTranslations("Footer");
  return (
    <footer className="bg-gray-900 text-white max-w-screen py-12 px-4 md:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4">
        <LogoRender />
        <QuickLinks />
        <Socials />
      </div>
      <hr className="border-t border-white my-4" />
      <div className="md:flex justify-between">
        <FooterRelated />
        <SocialsIcons />
      </div>
      <p className="text-xs sm:text-sm text-center text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} {t("title")}, {tfooter("rights")}.
      </p>
    </footer>
  );
};

export default Footer;
