import { useTranslations } from "next-intl";

const SectionTwo = () => {
  const t = useTranslations("CertificatePage");
  return (
    <section className="py-28 px-8 sm:px-16">
      <div>
        <h2 className="text-4xl font-bold mb-2">{t("title-2")}</h2>
        <p className="text-lg">{t("description-2")}</p>
      </div>
    </section>
  );
};

export default SectionTwo;
