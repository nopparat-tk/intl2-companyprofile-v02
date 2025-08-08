import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { GoogleTagManager } from "@next/third-parties/google";
import { notoSans, notoSansTh, notoSansSC } from "@/lib/font";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CookiesConsent from "@/components/elements/CookiesConsent";
import FacebookMSG from "@/components/elements/FacebookMSG";
import { getTranslations } from "next-intl/server";
import GclidScript from "@/components/elements/GclidScript";

export async function generateMetadata() {
  const t = await getTranslations("metaData");
  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const fontClass =
    locale === "th"
      ? notoSansTh.variable
      : locale === "ch"
      ? notoSansSC.variable
      : notoSans.variable;

  return (
    <html lang={locale} className={fontClass}>
      <body>
        <GoogleTagManager gtmId="GTM-KF74GNH5" />
        <NextIntlClientProvider locale={locale}>
          <FacebookMSG />
          <CookiesConsent />
          {children}
        </NextIntlClientProvider>
        <GclidScript />
      </body>
    </html>
  );
}
