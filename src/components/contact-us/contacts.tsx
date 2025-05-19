"use client";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./map"), {
  ssr: false,
});
const Contacts = () => {
  const t = useTranslations("ContactUsPage");
  return (
    <section className="max-w-screen bg-blue-900 text-white py-28 px-12 md:px-16">
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
      <div>
        <div>
          <MapPin />
          <h2>{t("address")}</h2>
          <p>{t("address-description")}</p>
        </div>
        <div>
          <Mail />
          <h2>{t("email")}</h2>
          <a href="mailto:info@almayar.ly">info@almayar.ly</a>
        </div>
        <div>
          <Phone />
          <h2>{t("phone")}</h2>
          <a href="tel:+218 91 123 4567">+218 92 600 8557</a>
          <a href="tel:+218 91 123 4567">+218 91 329 1516</a>
        </div>
        <div>
          <Printer />
          <h2>{t("fax")}</h2>
          <a href="tel:+218 21 369 7577">+218 21 369 7577</a>
        </div>
      </div>
      <div>
        <h2>{t("location")}</h2>
        <Map />
      </div>
    </section>
  );
};

export default Contacts;
