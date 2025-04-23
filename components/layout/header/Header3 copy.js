import { useState, useEffect } from "react";
import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";

export default function Header3({ scroll, handlePopup, handleMobileMenu }) {
   const [selectedLocale, setSelectedLocale] = useState(Locale.defaultLocale);

   useEffect(() => {
      // Get the user's locale from cookies or any other source
      const userLocale = Locale.getUserLocale();

      // Set the default selected option value
      setSelectedLocale(userLocale || Locale.defaultLocale);
   }, []);

   const handleLocaleChange = async (e) => {
      await setUserLocale(e.target.value);
      window.location.reload();
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
                                          <form action="#" className="clearfix">
                                             <div className="select-box clearfix">
                                                <select
                                                   className="selectmenu wide"
                                                   style={{ cursor: "pointer" }}
                                                   value={selectedLocale}
                                                   onChange={handleLocaleChange}
                                                >
                                                   {Locale.locales.map(
                                                      (locale) => (
                                                         <option
                                                            key={locale}
                                                            value={locale}
                                                         >
                                                            {locale}
                                                         </option>
                                                      )
                                                   )}
                                                </select>
                                             </div>
                                          </form>
                                       </div>
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
      </>
   );
}
