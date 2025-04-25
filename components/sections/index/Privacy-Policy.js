"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import "../../../public/assets/css/module-css/privacy-policy.css";
import Privacy from "../index/Privacy";
import Cookies from "../index/Cookies";
import Link from "next/link";

export default function PrivacyPolicy() {
   const t = useTranslations("PrivacyPolicy");
   const [activeTab, setActiveTab] = useState("privacy");
   const locale = useLocale();

   const handleTabClick = (tab) => {
      setActiveTab(tab);
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
               <Link
                  href={`/${locale}/cookies-policy`}
                  className={`policy-tab ${
                     activeTab === "cookies" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("cookies")}
               >
                  {t("title2")}
               </Link>
            </div>
            <div>
               {activeTab === "privacy" && <Privacy />}
               {activeTab === "cookies" && <Cookies />}
            </div>
         </div>
      </div>
   );
}
