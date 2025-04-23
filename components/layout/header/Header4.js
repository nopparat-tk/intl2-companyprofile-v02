import React, { useState } from "react";
import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import Locale from "../LocaleSwitch";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function Header4({ scroll, handleMobileMenu }) {
   const t = useTranslations("HeaderBtn");
   const locale = useLocale();

   return (
      <>
         {/*Start Main Header Three*/}
         <header className="main-header main-header-three">
            <nav className="main-menu">
               <div className="main-menu__wrapper">
                  <div className="main-menu__wrapper-inner">
                     <div
                        className="main-header-three__bottom"
                        style={{ backgroundColor: "white", marginTop: "0px" }}
                     >
                        <div className="container">
                           <div className="main-header-three__bottom-inner">
                              <div className="main-header-three__bottom-left">
                                 <div className="logo-box">
                                    <Link href={`/${locale}`}>
                                       <img
                                          src="/assets/images/resources/logo.svg"
                                          alt=""
                                       />
                                    </Link>
                                 </div>
                              </div>
                              <div className="main-header-three__bottom-middle">
                                 <Locale />
                                 <div className="main-header-three__menu">
                                    <div className="main-menu__main-menu-box">
                                       <Link
                                          href={`/${locale}`}
                                          className="mobile-nav__toggler"
                                          onClick={handleMobileMenu}
                                       >
                                          <i className="fa fa-bars"></i>
                                       </Link>
                                       {false && <Menu />}
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
         {/*End Main Header Three*/}

         <div
            className={`stricky-header stricky-header--style3 stricked-menu main-menu ${
               scroll ? "stricky-fixed" : ""
            }`}
         >
            <div className="sticky-header__content">
               <div className="main-menu__wrapper">
                  <div className="main-menu__wrapper-inner">
                     <div className="main-header-three__bottom">
                        <div className="container">
                           <div className="main-header-three__bottom-inner">
                              <div className="main-header-three__bottom-left">
                                 <div className="logo-box">
                                    <Link href={`/${locale}`}>
                                       <img
                                          src="/assets/images/resources/logo.svg"
                                          alt=""
                                       />
                                    </Link>
                                 </div>
                              </div>

                              <div className="main-header-three__bottom-middle">
                                 <Locale />
                                 <div className="main-header-three__menu">
                                    <div className="main-menu__main-menu-box">
                                       <Link
                                          href={`/${locale}`}
                                          className="mobile-nav__toggler"
                                          onClick={handleMobileMenu}
                                       >
                                          <i className="fa fa-bars"></i>
                                       </Link>
                                       {false && <Menu />}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* /.sticky-header__content */}
         </div>
         {/* /.stricky-header */}
         <MobileMenu handleMobileMenu={handleMobileMenu} />
      </>
   );
}
