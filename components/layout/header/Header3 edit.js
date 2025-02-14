"use client";

import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function Header3({ scroll, handlePopup, handleMobileMenu }) {
   const t = useTranslations("HeaderBtn");
   const [selectedLocale, setSelectedLocale] = useState("en"); // Default locale

   const items = [
      { value: "en", label: "🇺🇸 Eng" },
      { value: "ru", label: "🇷🇺 Rus" },
      { value: "th", label: "🇹🇭 Tha" },
   ];

   // useEffect(() => {
   //    const storedLocale = getLocaleFromStorage();
   //    if (storedLocale) {
   //       setSelectedLocale(storedLocale);
   //    }
   // });

   // const handleLocaleChange = (event) => {
   //    const newLocale = event.target.value;
   //    setSelectedLocale(newLocale);
   //    storeLocale(newLocale);

   //    // Reload the page to apply the new locale  (No routing)
   //    window.location.reload();
   // };

   // const getLocaleFromStorage = () => {
   //    const cookieName = "NEXT_LOCALE";
   //    const cookieValue = document.cookie
   //       .split("; ")
   //       .find((row) => row.startsWith(cookieName + "="));
   //    if (cookieValue) {
   //       return cookieValue.split("="); // Extract the value after the '='
   //    }
   //    return null;
   // };

   useEffect(() => {
      const storedLocale = localStorage.getItem("selectedLocale");
      if (storedLocale) {
         setSelectedLocale(storedLocale);
      }
   }, []);

   const handleLocaleChange = (event) => {
      const newLocale = event.target.value;
      setSelectedLocale(newLocale);
      localStorage.setItem("selectedLocale", newLocale);

      // Reload the page to apply the new locale  (No routing)
      window.location.reload();
   };

   const getLocaleFromStorage = () => {
      const cookieName = "NEXT_LOCALE";
      const cookieValue = document.cookie
         .split("; ")
         .find((row) => row.startsWith(cookieName))
         ?.split("=")[1];
      return cookieValue;
   };

   const storeLocale = (locale) => {
      document.cookie = `NEXT_LOCALE=${locale}; path=/`;
   };
   return (
      <>
         {/*Start Main Header Three*/}
         <header className="main-header main-header-three">
            <nav className="main-menu">
               <div className="main-menu__wrapper">
                  <div className="main-menu__wrapper-inner">
                     <div className="main-header-three__top">
                        <div className="container">
                           <div className="main-header-three__top-inner">
                              <div className="header-contact-style1">
                                 <ul>
                                    <li>
                                       <div className="icon">
                                          <span className="icon-phone"></span>
                                       </div>

                                       <div className="text-box">
                                          <p>
                                             <span>Talk to Us</span>{" "}
                                             <Link href="tel:0997121071">
                                                099 712 1071
                                             </Link>
                                          </p>
                                       </div>
                                    </li>

                                    <li>
                                       <div className="icon">
                                          <span className="icon-email"></span>
                                       </div>

                                       <div className="text-box">
                                          <p>
                                             <span>Mail Us</span>{" "}
                                             <Link href="mailto:info@sakww.com">
                                                info@sakww.com
                                             </Link>
                                          </p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>

                              <div className="main-header-three__right">
                                 <div className="main-header-three__right">
                                    <div className="main-header__language-switcher">
                                       <div className="icon">
                                          <span className="fa fa-globe"></span>
                                       </div>
                                       <div className="language-switcher clearfix">
                                          <div className="select-box clearfix">
                                             <select
                                                className="selectmenu wide"
                                                style={{ cursor: "pointer" }}
                                                defaultValue={selectedLocale}
                                                onChange={handleLocaleChange}
                                             >
                                                {items.map((item) => (
                                                   <option
                                                      key={item.value}
                                                      value={item.value}
                                                   >
                                                      {item.label}
                                                   </option>
                                                ))}
                                             </select>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <Link className="thm-btn2" href="#contact">
                                    {t("btn_text")}
                                    <span className="hover-btn hover-cx"></span>
                                    <span className="hover-btn hover-cx2"></span>
                                    <span className="hover-btn hover-cx3"></span>
                                    <span className="hover-btn hover-cx4"></span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        className="main-header-three__bottom"
                        style={{ backgroundColor: "white" }}
                     >
                        <div className="container">
                           <div className="main-header-three__bottom-inner">
                              <div className="main-header-three__bottom-left">
                                 <div className="logo-box">
                                    <Link href="/">
                                       <img
                                          src="assets/images/resources/logo.svg"
                                          alt=""
                                       />
                                    </Link>
                                 </div>
                              </div>

                              <div className="main-header-three__bottom-middle">
                                 <div className="main-header-three__menu">
                                    <div className="main-menu__main-menu-box">
                                       <Link
                                          href="#"
                                          className="mobile-nav__toggler"
                                          onClick={handleMobileMenu}
                                       >
                                          <i className="fa fa-bars"></i>
                                       </Link>
                                       <Menu />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
         </header>

         <div
            className={`stricky-header stricky-header--style3 stricked-menu main-menu ${
               scroll ? "stricky-fixed" : ""
            }`}
         >
            <div className="sticky-header__content">
               <div className="main-menu__wrapper">
                  <div className="main-menu__wrapper-inner">
                     <div className="main-header-three__top">
                        <div className="container">
                           <div className="main-header-three__top-inner">
                              <div className="header-contact-style1">
                                 <ul>
                                    <li>
                                       <div className="icon">
                                          <span className="icon-phone"></span>
                                       </div>

                                       <div className="text-box">
                                          <p>
                                             <span>Talk to Us</span>{" "}
                                             <Link href="tel:1234567890">
                                                [+123 456 789]
                                             </Link>
                                          </p>
                                       </div>
                                    </li>

                                    <li>
                                       <div className="icon">
                                          <span className="icon-email"></span>
                                       </div>

                                       <div className="text-box">
                                          <p>
                                             <span>Mail Us</span>{" "}
                                             <Link href="mailto:yourmail@email.com">
                                                [support@logistra.com]
                                             </Link>
                                          </p>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="main-header-three__bottom">
                        <div className="container">
                           <div className="main-header-three__bottom-inner">
                              <div className="main-header-three__bottom-left">
                                 <div className="logo-box">
                                    <Link href="/">
                                       <img
                                          src="assets/images/resources/logo.svg"
                                          alt=""
                                       />
                                    </Link>
                                 </div>
                              </div>

                              <div className="main-header-three__bottom-middle">
                                 <div className="main-header-three__menu">
                                    <div className="main-menu__main-menu-box">
                                       <Link
                                          href="#"
                                          className="mobile-nav__toggler"
                                          onClick={handleMobileMenu}
                                       >
                                          <i className="fa fa-bars"></i>
                                       </Link>
                                       <Menu />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <MobileMenu handleMobileMenu={handleMobileMenu} />
      </>
   );
}
