"use client";

import { useRouter, usePathname } from "@/lib/utils/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { HiLanguage } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("common");

  const queryString = searchParams.toString();
  const currentQuery = queryString ? `?${queryString}` : "";

  const handleSwitch = (newLocale: string) => {
    router.push(`${pathname}${currentQuery}`, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full bg-blue-900 px-4 text-white font-bold">
          <HiLanguage className="size-6 inline-block mx-2" />
          {t("language")}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleSwitch("ar")}>
          <HiLanguage className="size-6 inline-block mx-2" />
          {t("arabic")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSwitch("en")}>
          <HiLanguage className="size-6 inline-block mx-2" />
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
