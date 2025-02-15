import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
// import { Locale } from "@/i18n/config";
import Locale from "../LocaleSwitch";
// import { setUserLocale } from "@/i18n/locale";
import { useTranslations } from "next-intl";

export default function Header3({ scroll, handleMobileMenu }) {
   const t = useTranslations("HeaderBtn");

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
                                             <Link
                                                href={`tel:${t("phone_no")}`}
                                             >
                                                {t("phone_no")}
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
                                 <Locale />
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
         {/*End Main Header Three*/}

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
                                 <Locale />
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
            {/* /.sticky-header__content */}
         </div>
         {/* /.stricky-header */}
         <MobileMenu handleMobileMenu={handleMobileMenu} />
      </>
   );
}
