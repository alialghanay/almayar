import { useTranslations } from "next-intl";
import { Link } from "@/lib/utils/i18n/navigation";

const Socials = () => {
  const t = useTranslations("common");
  const tsocials = useTranslations("Socials");
  return (
    <div>
      <h3>{t("follow-us")}</h3>
      <nav className="flex flex-col gap-2">
        <Link
          href="https://www.facebook.com/yourcompany"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("facebook")}
        </Link>
        <Link
          href="mailto:info@almayar.ly"
          className="text-gray-400 hover:text-white"
        >
          info@almayar.ly
        </Link>
        <Link
          href="tel:+218913291516"
          className="text-gray-400 hover:text-white"
        >
          091-3291516
        </Link>
      </nav>
    </div>
  );
};

export default Socials;
