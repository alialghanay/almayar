import { useTranslations } from "next-intl";

const SectionOne = () => {
  const t = useTranslations("CertificatePage");
  return (
    <section className="bg-blue-900 text-white py-28 px-8 sm:px-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
    </section>
  );
};

export default SectionOne;
