"use client";

import { Folder, Lightbulb, Megaphone } from "lucide-react";
import { useTranslations } from "next-intl";
import FromsCard from "./froms-card";

const ContactsForm = () => {
  const t = useTranslations("ContactUsPage");
  const cards = [
    {
      title: t("forms-list.item0.title"),
      description: t("forms-list.item0.description"),
      btnLabel: t("forms-list.item0.btn"),
      icon: <Folder className="size-8" />,
      herf: "/contact-us/form?formType=qualification",
    },
    {
      title: t("forms-list.item1.title"),
      description: t("forms-list.item1.description"),
      btnLabel: t("forms-list.item1.btn"),
      icon: <Megaphone className="size-8" />,
      herf: "/contact-us/form?formType=complaint",
    },
    {
      title: t("forms-list.item2.title"),
      description: t("forms-list.item2.description"),
      btnLabel: t("forms-list.item2.btn"),
      icon: <Lightbulb className="size-8" />,
      herf: "/contact-us/form?formType=training",
    },
  ];
  return (
    <section className="py-28 px-12 md:px-16">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {t("forms")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
          {t("forms-description")}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mt-8">
        {cards.map((card, index) => (
          <FromsCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            btnLabel={card.btnLabel}
            herf={card.herf}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactsForm;
