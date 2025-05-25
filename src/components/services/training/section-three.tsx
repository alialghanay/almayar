import { useTranslations } from "next-intl";

const SectionThree = () => {
  const t = useTranslations("TrainingServicesPage");

  return (
    <section className="bg-blue-900 text-white flex flex-col py-10 px-12 sm:py-12 sm:px-14 md:py-14 md:px-16 ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-14 md:gap-20">
        <h1 className="py-8">{t("sectionThree.title")}</h1>
        <p className="text-xs sm:text-sm md:text-base font-normal py-2">
          {t("sectionThree.description")}
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} className="flex flex-col py-4">
            <h2 className="py-4">
              {t(`sectionThree.list.item${index}.title`)}
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal py-2">
              {t(`sectionThree.list.item${index}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionThree;
