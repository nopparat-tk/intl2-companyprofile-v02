"use client";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import "../../../public/assets/css/module-css/privacy-policy.css";
import Cookies from "./Cookies";

export default function CookiesTabs({ activeTab }) {
   const t = useTranslations("PrivacyPolicy");
   const locale = useLocale();
   const router = useRouter();

   const handleTabClick = (tab) => {
      router.push(`/${locale}/${tab}-policy`);
   };

   return (
      <div className="policy-container">
         <div className="policy-row">
            <div className="policy-tabs">
               <button
                  className={`policy-tab ${
                     activeTab === "privacy" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("privacy")}
               >
                  {t("title1")}
               </button>
               <button
                  className={`policy-tab ${
                     activeTab === "cookies" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("cookies")}
               >
                  {t("title2")}
               </button>
            </div>
            <div>
               <Cookies />
            </div>
         </div>
      </div>
   );
}
