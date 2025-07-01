import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/lib/utils/i18n/routing";
import Providers from "@/app/[locale]/providers";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "almayar",
  description: "almayar company qualification training & consulting",
  openGraph: {
    title: "almayar",
    description: "almayar company qualification training & consulting",
    url: "https://almayar.ly",
    siteName: "almayar",
    images: [
      {
        url: "https://almayar.ly/logo.svg",
        width: 1200,
        height: 630,
        alt: "almayar company qualification training & consulting",
        type: "image/svg+xml",
      },
    ],
    locale: "ar",
    type: "website",
  },
  appleWebApp: {
    title: "almayar",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cairo.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
