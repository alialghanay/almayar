"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axios from "axios";
import EventsCarousel from "./events-carousel";

const SectionTwo = () => {
  const t = useTranslations("CertificatePage");
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get("/api/images?path=public/event")
      .then((res) => setImages(res.data))
      .catch((err) => {
        console.log("Error fetching images:", err);
        setImages([]);
      });
  }, []);
  return (
    <section>
      <div className="mb-12 sm:mb-16 md:mb-20">
        <h2 className="mb-2">
          {t("title-2")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg">{t("description-2")}</p>
      </div>
      <EventsCarousel images={images} />
    </section>
  );
};

export default SectionTwo;
