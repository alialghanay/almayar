"use client";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./map"), {
  ssr: false,
});
const Contacts = () => {
  const t = useTranslations("ContactUsPage");
  const contacts = [
    {
      icon: <MapPin className="size-8" />,
      title: t("address"),
      description: t("address-description"),
    },
    {
      icon: <Mail />,
      title: t("email"),
      description: [
        <a key="info@almayar.ly" href="mailto:info@almayar.ly">
          info@almayar.ly
        </a>,
      ],
    },
    {
      icon: <Phone />,
      title: t("phone"),
      description: [
        <a key="+218 92 600 8557" href="tel:+218 91 123 4567">
          +218 92 600 8557
        </a>,
        <a key="+218 91 329 1516" href="tel:+218 91 123 4567">
          +218 91 329 1516
        </a>,
      ],
    },
    {
      icon: <Printer />,
      title: t("fax"),
      description: [
        <a key="+218 21 369 7577" href="tel:+218 21 369 7577">
          +218 21 369 7577
        </a>,
      ],
    },
  ];
  return (
    <section className="max-w-screen bg-blue-900 text-white">
      <div className="mb-12 sm:mb-16 md:mb-20">
        <h1 className="mb-2">{t("title")}</h1>
        <p className="text-sm sm:text-base md:text-lg">{t("description")}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col gap-8 py-8">
            <div className="flex items-center gap-4">
              {contact.icon}
              <h2>{contact.title}</h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base">
              {Array.isArray(contact.description)
                ? contact.description.map((desc, i) => (
                    <span key={`desc-${index}-${i}`} className="block">
                      {desc}
                    </span>
                  ))
                : contact.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-8 py-8">
        <h2>{t("location")}</h2>
        <Map />
      </div>
    </section>
  );
};

export default Contacts;
