"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";

export default function Layout({
   headerStyle,
   footerStyle,
   breadcrumbTitle,
   children,
   wrapperCls,
}) {
   const [scroll, setScroll] = useState(false);
   const [isMobileMenu, setIsMobileMenu] = useState(false);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
   }, []);

   useEffect(() => {
      if (mounted) {
         const WOW = require("wowjs");
         window.wow = new WOW.WOW({
            live: false,
         });
         window.wow.init();

         const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
               setScroll(scrollCheck);
            }
         };

         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
      }
   }, [mounted, scroll]);

   const handleMobileMenu = () => {
      setIsMobileMenu(!isMobileMenu);
   };

   if (!mounted) {
      return null;
   }

   return (
      <>
         <DataBg />
         <div
            className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`}
            id="#top"
         >
            {!headerStyle && (
               <Header1
                  scroll={scroll}
                  isMobileMenu={isMobileMenu}
                  handleMobileMenu={handleMobileMenu}
               />
            )}
            {headerStyle == 1 ? (
               <Header1
                  scroll={scroll}
                  isMobileMenu={isMobileMenu}
                  handleMobileMenu={handleMobileMenu}
               />
            ) : null}
            {headerStyle == 2 ? (
               <Header2
                  scroll={scroll}
                  isMobileMenu={isMobileMenu}
                  handleMobileMenu={handleMobileMenu}
               />
            ) : null}
            {headerStyle == 3 ? (
               <Header3
                  scroll={scroll}
                  isMobileMenu={isMobileMenu}
                  handleMobileMenu={handleMobileMenu}
               />
            ) : null}
            {headerStyle == 4 ? (
               <Header4
                  scroll={scroll}
                  isMobileMenu={isMobileMenu}
                  handleMobileMenu={handleMobileMenu}
               />
            ) : null}

            {breadcrumbTitle && (
               <Breadcrumb breadcrumbTitle={breadcrumbTitle} />
            )}

            {children}

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}
            {footerStyle == 2 ? <Footer2 /> : null}
            {footerStyle == 3 ? <Footer3 /> : null}
            {footerStyle == 4 ? <Footer4 /> : null}
         </div>
         <BackToTop scroll={scroll} />
      </>
   );
}
