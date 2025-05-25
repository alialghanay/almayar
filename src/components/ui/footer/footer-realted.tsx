import { Link } from "@/lib/utils/i18n/navigation";
import { useTranslations } from "next-intl";

const FooterRelated = () => {
  const tfooter = useTranslations("Footer");
  return (
    <div className="md:flex gap-4">
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h6>{tfooter("cookie")}</h6>
      </Link>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h6>{tfooter("privacy")}</h6>
      </Link>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-1 text-gray-400 hover:text-white"
      >
        <h6>{tfooter("terms")}</h6>
      </Link>
    </div>
  );
};

export default FooterRelated;
