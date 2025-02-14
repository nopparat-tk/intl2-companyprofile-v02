import React from "react";
import { setUserLocale } from "@/i18n/locale";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const saveLocale = (locale) => {
   if (typeof window !== "undefined") {
      localStorage.setItem("user-locale", locale);
   }
};

// Function to get locale from local storage
const getLocale = () => {
   if (typeof window !== "undefined") {
      return localStorage.getItem("user-locale") || "en"; // default to 'en' if no locale is found
   }
   return "en";
};

export default function LocaleSwitch() {
   const [locale, setLocale] = useState(getLocale());

   const items = [
      { value: "en", label: "🇺🇸 Eng" },
      { value: "ru", label: "🇷🇺 Rus" },
      { value: "th", label: "🇹🇭 Tha" },
   ];

   const handleLocaleChange = (newLocale) => {
      setLocale(newLocale);
      saveLocale(newLocale);
      setUserLocale(newLocale); // Assuming this function updates the locale in your app
   };

   useEffect(() => {
      setUserLocale(locale); // Set the initial locale on component mount
   }, [locale]);
   return (
      <div className="main-header__language-switcher">
         <div className="icon">
            <span className="fa fa-globe"></span>
         </div>
         <div className="language-switcher clearfix">
            <div className="select-box clearfix">
               <select
                  className="selectmenu wide"
                  style={{ cursor: "pointer" }}
                  value={locale}
                  onChange={(e) => handleLocaleChange(e.target.value)}
               >
                  {items.map((item) => (
                     <option key={item.value} value={item.value}>
                        {item.label}
                     </option>
                  ))}
               </select>
            </div>
         </div>
      </div>
   );
}
