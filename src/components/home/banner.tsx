"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const Banner = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-blue-900 text-white py-32 flex flex-col  sm:flex-row items-center justify-center gap-11">
      <div className="relative size-52 sm:size-60 md:size-72 lg:size-96">
        <Image src="logo-blank.svg" alt="" fill className="object-contain" />
      </div>
      <div className="size-52 sm:size-60 md:size-72 lg:size-96 flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-bold">{t("banner")}</h1>
        <p className="hidden md:block">{t("banner-description")}</p>
      </div>
    </section>
  );
};

export default Banner;
