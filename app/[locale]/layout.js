import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { notoSans, notoSansTh, notoSansSC } from "@/lib/font";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CookiesConsent from "@/components/elements/CookiesConsent";
import FacebookMSG from "@/components/elements/FacebookMSG";
import { getTranslations } from "next-intl/server";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KF74GNH5');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KF74GNH5"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <NextIntlClientProvider locale={locale}>
          <FacebookMSG />
          <CookiesConsent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
