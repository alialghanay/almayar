"use client";

import { Link, usePathname } from "@/lib/utils/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { HiLanguage } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const t = useTranslations("common");
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Link
          href={pathname}
          locale={locale === "en" ? "ar" : "en"}
          className="rounded-full bg-blue-900 px-4 text-white font-bold"
        >
          <HiLanguage className="size-6 inline-block mx-2" />
          {t("language")}
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={pathname} locale="ar">
            <HiLanguage className="size-6 inline-block mx-2" />
            {t("arabic")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={pathname} locale="en">
            <HiLanguage className="size-6 inline-block mx-2" />
            {t("english")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 *  <div className="space-x-4">
      <Link
        href={pathname}
        locale={locale === "en" ? "ar" : "en"}
        className="rounded-full bg-blue-900 px-4 text-white font-bold"
      >
        <HiLanguage className="size-6 inline-block mx-2" />
        {t("language")}
      </Link>
    </div>
*/
