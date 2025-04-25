"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Locale from "../layout/LocaleSwitch";
import PhoneCall from "../elements/PhoneCall";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
   const m = useTranslations("MenuData");
   const p = useTranslations("HeaderBtn");
   const [isActive, setIsActive] = useState({
      status: false,
      key: "",
      subMenuKey: "",
   });

   const handleToggle = (key, subMenuKey = "") => {
      if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
         setIsActive({
            status: false,
            key: "",
            subMenuKey: "",
         });
      } else {
         setIsActive({
            status: true,
            key,
            subMenuKey,
         });
      }
   };
   return (
      <>
         <div className="mobile-nav__wrapper">
            <div
               className="mobile-nav__overlay mobile-nav__toggler"
               onClick={handleMobileMenu}
            ></div>
            <div className="mobile-nav__content">
               <span
                  className="mobile-nav__close mobile-nav__toggler"
                  onClick={handleMobileMenu}
               >
                  <i className="fa fa-times"></i>
               </span>

               <div className="logo-box">
                  <Link href="/" aria-label="logo image">
                     <img
                        src="/assets/images/resources/logo-wh.svg"
                        width="150"
                        alt=""
                     />
                  </Link>
               </div>
               {/* <div className="mobile-nav__container">
                  <div className="main-header__language-switcher mobile-nav__contact list-unstyled">
                     <Locale />
                  </div>
               </div> */}
               <div className="mobile-nav__container">
                  <div
                     className="collapse navbar-collapse show clearfix"
                     id="navbarSupportedContent"
                  >
                     <ul className="main-menu__list">
                        <li>
                           <Link href="#about">{m("nav1")}</Link>
                           <Link href="#product">{m("nav3")}</Link>
                           <Link href="#service">{m("nav2")}</Link>
                           <Link href="#branch">{m("nav4")}</Link>
                           <Link href="#store">{m("nav5")}</Link>
                           <Link href="#contact">{m("nav6")}</Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="mobile-nav__container">
                  <ul className="mobile-nav__contact list-unstyled">
                     <li>
                        <i className="fa fa-phone-alt"></i>
                        {/* <Link href={`tel:${p("phone_no")}`}>
                           {p("phone_no")}
                        </Link> */}
                        <div style={{ color: "white" }}>
                           <PhoneCall />
                        </div>
                     </li>
                     <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:info@sakww.com">info@sakww.com</Link>
                     </li>
                  </ul>
               </div>
               <div className="mobile-nav__social">
                  <Link
                     href="https://www.facebook.com/Sakwwth"
                     className="fab fa-facebook-f"
                  ></Link>
                  <Link
                     href="https://www.facebook.com/Sakwwth"
                     className="fab fa-youtube"
                  ></Link>
                  <Link
                     href="https://www.tiktok.com/@sakwoodworks"
                     className="fab fa-tiktok"
                  ></Link>
                  <Link
                     href="https://www.instagram.com/sakwoodworks"
                     className="fab fa-instagram"
                  ></Link>
                  <Link
                     href="https://lin.ee/smwoT3j"
                     className="fab fa-line"
                  ></Link>
               </div>
            </div>
         </div>
      </>
   );
};
export default MobileMenu;
