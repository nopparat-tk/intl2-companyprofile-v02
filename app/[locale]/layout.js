import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { notoSans, notoSansTh, notoSansSC } from "@/lib/font";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import CookiesConsent from "@/components/elements/CookiesConsent";
import FacebookMSG from "@/components/elements/FacebookMSG";

export const metadata = {
   title: "SAK WoodWorks Co.,Ltd.",
   description: "High-Quality Processed Wood Distributor in Thailand",
};

export default async function LocaleLayout({ children, params: { locale } }) {
   let messages;
   try {
      messages = (await import(`../../messages/${locale}.json`)).default;
   } catch (error) {
      notFound();
   }

   return (
      <html
         lang={locale}
         className={
            locale === "th"
               ? notoSansTh.variable
               : locale === "ch"
               ? notoSansSC.variable
               : notoSans.variable
         }
      >
         <head>
            <meta
               name="google-site-verification"
               content="YIeMcBwBUeAMJXLnLktlyISAHUHcCIcREi_ToKT2mFo"
            />
         </head>
         <body>
            <NextIntlClientProvider messages={messages} locale={locale}>
               <FacebookMSG />
               <CookiesConsent />
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
