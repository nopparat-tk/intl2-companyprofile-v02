"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import "../../../public/assets/css/module-css/privacy-policy.css";
import Privacy from "./Privacy";
import Cookies from "./Cookies";
import Link from "next/link";

export default function CookiesPolicy() {
   const t = useTranslations("PrivacyPolicy");
   const [activeTab, setActiveTab] = useState("cookies");
   const locale = useLocale();

   const handleTabClick = (tab) => {
      setActiveTab(tab);
   };

   return (
      <div className="policy-container">
         <div className="policy-row">
            <div className="policy-tabs">
               <Link
                  href={`/${locale}/privacy-policy`}
                  className={`policy-tab ${
                     activeTab === "privacy" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("privacy")}
               >
                  {t("title1")}
               </Link>
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
               {activeTab === "privacy" && <Privacy />}
               {activeTab === "cookies" && <Cookies />}
            </div>
         </div>
      </div>
   );
}
