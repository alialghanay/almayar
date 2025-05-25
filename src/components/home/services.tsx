"use client";

import { useTranslations } from "next-intl";
import { HiOutlinePuzzle } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineCheckBadge } from "react-icons/hi2";
import { Button } from "../ui/button";

const Services = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-blue-900  px-16 text-white flex justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-start gap-12 sm:gap-20 my-32">
        <div className="sm:flex jstify-center items-center gap-20">
          <div className="max-w-md">
            <span>{t("services")}</span>
            <h1>{t("services-title")}</h1>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl">
            {t("services-description")}
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-12">
          <li className="max-w-md">
            <HiOutlineCheckBadge className="text-4xl" />
            <h1>
              {t("services-qualification-title")}
            </h1>
            <p className="text-lg">{t("services-qualification-description")}</p>
          </li>
          <li className="max-w-md">
            <HiOutlineBookOpen className="text-4xl" />
            <h1>
              {t("services-technical-title")}
            </h1>
            <p className="text-lg">{t("services-technical-description")}</p>
          </li>
          <li className="max-w-md">
            <HiOutlinePuzzle className="text-4xl" />
            <h1>
              {t("services-tailored-title")}
            </h1>
            <p className="text-lg">{t("services-tailored-description")}</p>
          </li>
        </ul>
        <Button className="rounded-none bg-white text-black">
          {t("services-btn")}
        </Button>
      </div>
    </section>
  );
};

export default Services;
