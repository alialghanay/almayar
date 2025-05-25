import { useTranslations } from "next-intl";
import { Link } from "@/lib/utils/i18n/navigation";

const QuickLinks = () => {
  const t = useTranslations("common");
  const tNavs = useTranslations("Navs");
  return (
    <div>
      <h3>{t("quick-links")}</h3>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="text-gray-400 hover:text-white">
          {tNavs("home")}
        </Link>
        <Link href="/certificates" className="text-gray-400 hover:text-white">
          {tNavs("certificates")}
        </Link>
        <Link href="/services" className="text-gray-400 hover:text-white">
          {tNavs("services")}
        </Link>
        <Link href="/contact-us" className="text-gray-400 hover:text-white">
          {tNavs("contact-us")}
        </Link>
      </nav>
    </div>
  );
};

export default QuickLinks;
