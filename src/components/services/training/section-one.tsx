import { useTranslations } from "next-intl";

const SectionOne = () => {
  const t = useTranslations("TrainingServicesPage");
  return (
    <section className="bg-blue-900 flex flex-col py-10 px-12 sm:py-12 sm:px-14 md:py-14 md:px-16 text-white">
      <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold py-8">
        {t("sectionOne.title")}
      </h1>
      <p>{t("sectionOne.description")}</p>
    </section>
  );
};

export default SectionOne;
