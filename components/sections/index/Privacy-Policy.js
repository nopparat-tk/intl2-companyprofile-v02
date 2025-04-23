"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import "../../../public/assets/css/module-css/privacy-policy.css";
import Privacy from "../index/Privacy";
import Cookies from "../index/Cookies";

export default function PrivacyPolicy() {
   const t = useTranslations("PrivacyPolicy");
   const [activeTab, setActiveTab] = useState("privacy");

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
