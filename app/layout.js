import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dmSans } from "@/lib/font";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
export const metadata = {
   title: "SAK WoodWorks Co.,Ltd.",
   // title: "dev2-multi-lang",
   description: "High-Quality Processed Wood Distributor in Thailand",
};

export default async function RootLayout({ children }) {
   const locale = await getLocale();
   const messages = await getMessages();
   return (
      <html lang={locale} className={`${dmSans.variable}`}>
         <body>
            <NextIntlClientProvider messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
