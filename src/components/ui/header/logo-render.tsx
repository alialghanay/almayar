import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const LogoRender = () => {
  const t = useTranslations("common");
  return (
    <Link
      href="/"
      className="hidden sm:flex justify-center items-center text-nowrap text-2xl font-bold gap-2 mx-32"
    >
      <div className="relative sm:w-12 sm:h-8">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <h1>{t("title")}</h1>
    </Link>
  );
};

export default LogoRender;
