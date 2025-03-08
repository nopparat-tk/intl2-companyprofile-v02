"use client";
import React, { useState } from "react";
import "../../../public/assets/css/module-css/privacy-policy.css";
import Privacy from "./Privacy";
import Cookies from "./Cookies";

export default function CookiesPolicy() {
   const [activeTab, setActiveTab] = useState("cookies");

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
                  Privacy Policy
               </button>
               <button
                  className={`policy-tab ${
                     activeTab === "cookies" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("cookies")}
               >
                  Cookies Policy
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
