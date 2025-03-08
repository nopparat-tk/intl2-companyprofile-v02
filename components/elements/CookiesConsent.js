"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import "../../public/assets/css/module-css/cookiesconsent.css"; // Make sure to create and style this CSS file

export default function CookiesConsent() {
   const [isVisible, setIsVisible] = useState(false);
   const t = useTranslations("ConsentCookies");

   useEffect(() => {
      const consent = localStorage.getItem("cookies-consent");
      if (!consent) {
         setIsVisible(true);
      }
   }, []);

   const handleAccept = () => {
      localStorage.setItem("cookies-consent", "true");
      setIsVisible(false);
   };

   const handleDecline = () => {
      localStorage.setItem("cookies-consent", "false");
      setIsVisible(false);
   };

   if (!isVisible) {
      return null;
   }

   return (
      <div className="cookies-consent2">
         <div className="cookies-consent__message">
            <p>
               <span>{t("message")}</span> <span>{t("moreInfo")}</span>{" "}
               <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <span>{t("privacyPolicy")}</span>
               </Link>
               <span>{t("and")}</span>
               <Link
                  href="/cookies-policy"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <span>{t("cookiePolicy")}</span>
               </Link>
               <span>{t("period")}</span>
            </p>
            <button
               onClick={handleAccept}
               className="cookies-consent__button cookies-consent__button--accept"
            >
               <span>{t("accept")}</span>
            </button>
         </div>
      </div>
   );
}
