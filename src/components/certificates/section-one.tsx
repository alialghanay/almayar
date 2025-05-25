"use client";
import { useTranslations } from "next-intl";
import CertificatesCarousel from "./certificates-carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const SectionOne = () => {
  const t = useTranslations("CertificatePage");
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get("/api/images?path=public/certificate")
      .then((res) => setImages(res.data))
      .catch((err) => {
        console.log("Error fetching images:", err);
        setImages([]);
      });
  }, []);

  return (
    <section className="max-w-screen bg-blue-900 text-white">
      <div className="mb-12 sm:mb-16 md:mb-20">
        <h1 className=" font-bold mb-2">{t("title")}</h1>
        <p className="text-sm sm:text-base md:text-lg">{t("description")}</p>
      </div>
      <div>
        <CertificatesCarousel images={images} />
      </div>
    </section>
  );
};

export default SectionOne;
