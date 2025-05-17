import { useTranslations } from "next-intl";

const SectionTwo = () => {
  const t = useTranslations("TrainingServicesPage");

  return (
    <section className="flex flex-col py-10 px-12 sm:py-12 sm:px-14 md:py-14 md:px-16 ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-14 md:gap-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-8">
          {t("sectionTwo.title")}
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-normal py-2">
          {t("sectionTwo.description")}
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index} className="flex flex-col py-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold py-4">
              {t(`sectionTwo.list.item${index}.title`)}
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal py-2">
              {t(`sectionTwo.list.item${index}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTwo;
