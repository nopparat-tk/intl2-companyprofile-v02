"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "../../../public/assets/css/module-css/privacy-policy.css";

export default function Cookies() {
   const t = useTranslations("PrivacyPolicy");

   return (
      <div className="privacy-content">
         <h2>
            <span>{t("title")}</span>
         </h2>
         <span>
            <h3>
               <span>{t("section7.title")}</span>
            </h3>
            <a>●</a> <span>{t("section7.content1")}</span> <br /> <br />
            <h3>
               <span>{t("section8.title")}</span>
            </h3>
            <a>●</a> <span>{t("section8.content1")}</span> <br />
            <ul>
               <li>
                  ・ <span>{t("section8.list1")}</span>
               </li>
               <li>
                  ・ <span>{t("section8.list2")}</span>
               </li>
               <li>
                  ・<span>{t("section8.list3")}</span>
               </li>
               <li>
                  ・<span>{t("section8.list4")}</span>
               </li>
            </ul>
            <br />
            <h3>
               <span>{t("section9.title")}</span>
            </h3>
            <a>●</a> <span>{t("section9.content1")}</span> <br />
            <ul>
               <li>
                  ・<span>{t("section9.list1")}</span>
               </li>
               <li>
                  ・<span>{t("section9.list2")}</span>
               </li>
               <li>
                  ・<span>{t("section9.list3")}</span>
               </li>
               <li>
                  ・<span>{t("section9.list4")}</span>
               </li>
               <li>
                  ・<span>{t("section9.list5")}</span>
               </li>
            </ul>
            <br />
            <h3>
               <span>{t("section10.title")}</span>
            </h3>
            <span>{t("section10.content1")}</span> <br />
         </span>
         <span style={{ color: "#325ae1" }}>
            <a>{t("contact.email")}</a>
            {t("contact.info1")}
         </span>{" "}
         <br />{" "}
         <span style={{ color: "#325ae1" }}>
            <a>{t("contact.phone")}</a>{" "}
            <Link href={`tel:${t("contact.info2")}`}>{t("contact.info2")}</Link>
         </span>{" "}
         <span>{t("contact.hours")}</span> <br />
         <span>
            <a style={{ color: "#325ae1" }}>{t("contact.address")}</a>{" "}
            {t("contact.info3")}
         </span>
      </div>
   );
}
