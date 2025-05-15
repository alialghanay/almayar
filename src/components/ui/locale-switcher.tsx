"use client";

import { Link, usePathname } from "@/lib/utils/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { HiLanguage } from "react-icons/hi2";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const t = useTranslations("common");
  const locale = useLocale();
  return (
    <div className="space-x-4">
      <Link
        href={pathname}
        locale={locale === "en" ? "ar" : "en"}
        className="rounded-full bg-blue-900 px-4 text-white font-bold"
      >
        <HiLanguage className="size-6 inline-block mx-2" />
        {t("language")}
      </Link>
    </div>
  );
}
