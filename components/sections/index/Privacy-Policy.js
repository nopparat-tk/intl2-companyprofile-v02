"use client";
import React, { useState } from "react";
import "../../../public/assets/css/module-css/privacy-policy.css"; // Make sure to create and style this CSS file
import Privacy from "../index/Privacy";
import Cookies from "../index/Cookies";

export default function PrivacyPolicy() {
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
            {/* <div className="policy-content">
            {activeTab === "privacy" && (
               <div className="privacy-policy">
                  <h2>Privacy Policy</h2>
                  <p>
                     Your privacy is important to us. This privacy statement
                     explains the personal data we collect and how we use it.
                  </p>
                  Add more privacy policy content here
               </div>
            )}
            {activeTab === "cookies" && (
               <div className="cookies-policy">
                  <h2>Cookies Policy</h2>
                  <p>
                     We use cookies to improve your experience on our site. This
                     cookies policy explains what cookies are and how we use
                     them.
                  </p>
                  Add more cookies policy content here
               </div>
            )}
         </div> */}
            <div>
               {activeTab === "privacy" && <Privacy />}
               {activeTab === "cookies" && <Cookies />}
            </div>
         </div>
      </div>
   );
}
