"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Locale from "../layout/LocaleSwitch";

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
                        src="assets/images/resources/logo-wh.svg"
                        width="150"
                        alt=""
                     />
                  </Link>
               </div>
               <div className="mobile-nav__container">
                  <div className="main-header__language-switcher mobile-nav__contact list-unstyled">
                     {/* <div className="icon">
                        <span className="fa fa-globe"></span>
                     </div> */}
                     {/* <div className="language-switcher clearfix">
                        <div className="select-box clearfix">
                           <select
                              className="selectmenu wide"
                              style={{ cursor: "pointer" }}
                           >
                              <option>🇺🇸 Eng</option>
                              <option>🇷🇺 Rus</option>
                              <option>🇹🇭 Tha</option>
                           </select>
                        </div>
                     </div> */}
                     <Locale />
                  </div>
               </div>
               <div className="mobile-nav__container">
                  <div
                     className="collapse navbar-collapse show clearfix"
                     id="navbarSupportedContent"
                  >
                     {/* <ul className="main-menu__list">
                        <li
                           className={
                              isActive.key == 1
                                 ? "dropdown current"
                                 : "dropdown"
                           }
                        >
                           <Link href="/">Home</Link>
                           <ul
                              style={{
                                 display: `${
                                    isActive.key == 1 ? "block" : "none"
                                 }`,
                              }}
                           >
                              <li>
                                 <Link href="/">Home One</Link>
                              </li>
                              <li>
                                 <Link href="index2">Home Two</Link>
                              </li>
                              <li>
                                 <Link href="index3">Home Three</Link>
                              </li>
                              <li>
                                 <Link href="index-dark">Home Dark</Link>
                              </li>
                           </ul>
                           <button
                              className={
                                 isActive.key == 1 ? "expanded open" : ""
                              }
                              onClick={() => handleToggle(1)}
                           >
                              <span className="fa fa-angle-right" />
                           </button>
                        </li>
                        <li>
                           <Link href="/about/">About</Link>
                        </li>
                        <li
                           className={
                              isActive.key == 2
                                 ? "dropdown current"
                                 : "dropdown"
                           }
                        >
                           <Link href="/#">Services</Link>
                           <ul
                              style={{
                                 display: `${
                                    isActive.key == 2 ? "block" : "none"
                                 }`,
                              }}
                           >
                              <li>
                                 <Link href="service">Services</Link>
                              </li>
                              <li>
                                 <Link href="international-transport">
                                    International Transport{" "}
                                 </Link>
                              </li>
                              <li>
                                 <Link href="track-transport">
                                    Local Track Transport
                                 </Link>
                              </li>
                              <li>
                                 <Link href="personal-delivery">
                                    Fast Personal Delivery
                                 </Link>
                              </li>
                              <li>
                                 <Link href="ocean-transport">
                                    Safe Ocean Transport
                                 </Link>
                              </li>
                              <li>
                                 <Link href="warehouse-facility">
                                    Warehouse Facility
                                 </Link>
                              </li>
                              <li>
                                 <Link href="emergency-transport">
                                    Emergency Transport{" "}
                                 </Link>
                              </li>
                           </ul>
                           <button
                              className={
                                 isActive.key == 2 ? "expanded open" : ""
                              }
                              onClick={() => handleToggle(2)}
                           >
                              <span className="fa fa-angle-right" />
                           </button>
                        </li>
                        <li
                           className={
                              isActive.key == 3
                                 ? "dropdown current"
                                 : "dropdown"
                           }
                        >
                           <Link href="/#">Projects</Link>
                           <ul
                              style={{
                                 display: `${
                                    isActive.key == 3 ? "block" : "none"
                                 }`,
                              }}
                           >
                              <li>
                                 <Link href="project">Projects</Link>
                              </li>
                              <li>
                                 <Link href="project-details">
                                    Project Details
                                 </Link>
                              </li>
                           </ul>
                           <button
                              className={
                                 isActive.key == 3 ? "expanded open" : ""
                              }
                              onClick={() => handleToggle(3)}
                           >
                              <span className="fa fa-angle-right" />
                           </button>
                        </li>
                        <li
                           className={
                              isActive.key == 4
                                 ? "dropdown current"
                                 : "dropdown"
                           }
                        >
                           <Link href="/#">Pages</Link>
                           <ul
                              style={{
                                 display: `${
                                    isActive.key == 4 ? "block" : "none"
                                 }`,
                              }}
                           >
                              <li>
                                 <Link href="team">Team</Link>
                              </li>
                              <li>
                                 <Link href="team-details">Team Details</Link>
                              </li>
                              <li>
                                 <Link href="testimonial">Testimonials</Link>
                              </li>
                              <li>
                                 <Link href="pricing">Pricing</Link>
                              </li>
                              <li>
                                 <Link href="faq">Faq</Link>
                              </li>
                              <li>
                                 <Link href="404">404 Error</Link>
                              </li>
                           </ul>
                           <button
                              className={
                                 isActive.key == 4 ? "expanded open" : ""
                              }
                              onClick={() => handleToggle(4)}
                           >
                              <span className="fa fa-angle-right" />
                           </button>
                        </li>
                        <li
                           className={
                              isActive.key == 5
                                 ? "dropdown current"
                                 : "dropdown"
                           }
                        >
                           <Link href="/#">Blog</Link>
                           <ul
                              style={{
                                 display: `${
                                    isActive.key == 5 ? "block" : "none"
                                 }`,
                              }}
                           >
                              <li>
                                 <Link href="blog">Blog</Link>
                              </li>
                              <li>
                                 <Link href="blog-standard">Blog Standard</Link>
                              </li>
                              <li>
                                 <Link href="blog-left-sidebar">
                                    Blog Left Sidebar
                                 </Link>
                              </li>
                              <li>
                                 <Link href="blog-right-sidebar">
                                    Blog Right Sidebar
                                 </Link>
                              </li>
                              <li>
                                 <Link href="blog-details">Blog Details</Link>
                              </li>
                           </ul>
                           <button
                              className={
                                 isActive.key == 5 ? "expanded open" : ""
                              }
                              onClick={() => handleToggle(5)}
                           >
                              <span className="fa fa-angle-right" />
                           </button>
                        </li>
                        <li>
                           <Link href="/contact">Contact</Link>
                        </li>
                     </ul> */}
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
                        <Link href={`tel:${p("phone_no")}`}>
                           {p("phone_no")}
                        </Link>
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
