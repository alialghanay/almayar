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
          href="https://www.facebook.com/almayarlibya/"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("facebook")}
        </Link>
        <Link
          href="https://www.linkedin.com/in/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D8%B9%D9%8A%D8%A7%D8%B1-%D9%84%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84-%D9%88%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-286553142/"
          className="text-gray-400 hover:text-white"
        >
          {tsocials("linkedin")}
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
          dir="ltr"
        >
          +218213697577
        </Link>
        <Link
          href="tel:+218913291516"
          className="text-gray-400 hover:text-white"
          dir="ltr"
        >
          +218913291516
        </Link>
        <Link
          href="tel:+218913291516"
          className="text-gray-400 hover:text-white"
          dir="ltr"
        >
          +218926008557
        </Link>
      </nav>
    </div>
  );
};

export default Socials;
