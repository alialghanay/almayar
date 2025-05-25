import { useTranslations } from "next-intl";
import Image from "next/image";

const LogoRender = () => {
  const t = useTranslations("common");
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-2">
      <div className="relative w-24 h-16 md:w-12 md:h-8">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <h3>{t("title")}</h3>
    </div>
  );
};

export default LogoRender;
