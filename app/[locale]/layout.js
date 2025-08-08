import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { GoogleTagManager } from "@next/third-parties/google";
import { notoSans, notoSansTh, notoSansSC } from "@/lib/font";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

const CookiesConsent = dynamic(
  () => import("@/components/elements/CookiesConsent"),
  { ssr: false }
);
const FacebookMSG = dynamic(() => import("@/components/elements/FacebookMSG"), {
  ssr: false,
});
const GclidScript = dynamic(() => import("@/components/elements/GclidScript"), {
  ssr: false,
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "metaData" });
  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  const fontClass =
    locale === "th"
      ? notoSansTh.variable
      : locale === "ch"
      ? notoSansSC.variable
      : notoSans.variable;

  return (
    <html lang={locale} className={fontClass}>
      <body>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FacebookMSG />
          <CookiesConsent />
          {children}
        </NextIntlClientProvider>
        <GclidScript />
      </body>
    </html>
  );
}
