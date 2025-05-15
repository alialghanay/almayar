"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Journey = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="sm:px-4 md:px-8 lg:px-16 xl:px-32 py-16 flex flex-col items-center justify-center gap-2">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">{t("journey")}</h1>
        <p className="text-xl sm:text-2xl">{t("journey-description")}</p>
      </div>
      <div className="relative w-80 h-44 sm:w-96 sm:h-72 md:w-[32rem] md:h-80 lg:w-[64rem] lg:h-[32rem]">
        <Image
          src="/discover.png"
          alt="almayar discover image"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Journey;
