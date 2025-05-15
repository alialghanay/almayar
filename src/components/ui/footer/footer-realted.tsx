import { Link } from "@/lib/utils/i18n/navigation";
import { useTranslations } from "next-intl";

const FooterRelated = () => {
  const t = useTranslations("common");
  const tfooter = useTranslations("Footer");
  return (
    <div className="md:flex gap-4">
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h2 className="text-lg">{tfooter("cookie")}</h2>
      </Link>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h2 className="text-lg">{tfooter("privacy")}</h2>
      </Link>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h2 className="text-lg">{tfooter("terms")}</h2>
      </Link>
    </div>
  );
};

export default FooterRelated;
