import { useTranslations } from "next-intl";
import { Link } from "@/lib/utils/i18n/navigation";

const Socials = () => {
  const t = useTranslations("common");
  const tsocials = useTranslations("Socials");
  return (
    <div>
      <h2 className="text-lg">{t("follow-us")}</h2>
      <nav className="flex flex-col gap-2">
        <Link
          href="https://www.linkedin.com/company/yourcompany"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("linkedin")}
        </Link>
        <Link
          href="https://www.facebook.com/yourcompany"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("facebook")}
        </Link>
        <Link
          href="https://www.twitter.com/yourcompany"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("twitter")}
        </Link>
      </nav>
    </div>
  );
};

export default Socials;
