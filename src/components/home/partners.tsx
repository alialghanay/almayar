"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const Partners = () => {
  const t = useTranslations("HomePage");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);
  return (
    <section className="flex items-center justify-center py-10">
      <div className="flex flex-col items-start gap-9">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-4xl font-bold">{t("partners-title")}</h1>
          <p className="text-xl">{t("partners-description")}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-16">
          {images.map((img, i) => (
            <Image
              key={i}
              src={`/partners/${img}`}
              alt={`img-${i}`}
              width={160}
              height={160}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
