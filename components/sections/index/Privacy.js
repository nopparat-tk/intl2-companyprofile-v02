import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "../../../public/assets/css/module-css/privacy-policy.css";
export default function Privacy() {
   const t = useTranslations("PrivacyPolicy");

   return (
      <div className="privacy-content">
         <h2>
            <span>{t("title1")}</span>
         </h2>
         <span>
            <span>{t("intro1")}</span> <a>{t("name")} </a>{" "}
            <span>{t("intro2")}</span> <a>{t("company")}</a>{" "}
            <span>{t("intro3")}</span> <br /> <br />
            <span>{t("intro4")}</span> <br /> <br />
            <span>{t("intro5")}</span> <br /> <br />
            <span>{t("intro6")}</span> <br /> <br />
            <h3>
               <span>{t("section1.title")}</span>
            </h3>
            <a>1.1.</a> <span>{t("section1.content1")}</span> <br />
            <a>1.2.</a> <span>{t("section1.content2")}</span> <br /> <br />
            <h3>
               <span>{t("section2.title")}</span>
            </h3>
            <a>2.1.</a> <span>{t("section2.content1")}</span> <br />
            <ul>
               <li>
                  2.1.1 <span>{t("section2.list1")}</span>
               </li>
               <li>
                  2.1.2 <span>{t("section2.list2")}</span>
               </li>
               <li>
                  2.1.3 <span>{t("section2.list3")}</span>
               </li>
               <li>
                  2.1.4 <span>{t("section2.list4")}</span>
               </li>
               <li>
                  2.1.5 <span>{t("section2.list5")}</span>
               </li>
               <li>
                  2.1.6 <span>{t("section2.list6")}</span>
               </li>
               <li>
                  2.1.7 <span>{t("section2.list7")}</span>
               </li>
               <li>
                  2.1.8 <span>{t("section2.list8")}</span>
               </li>
            </ul>
            <a>2.2</a> <span>{t("section2.content2")}</span> <br />
            <a>2.3</a> <span>{t("section2.content3")}</span> <br />
            <a>2.4</a> <span>{t("section2.content4")}</span> <br /> <br />
            <h3>
               <span>{t("section3.title")}</span>
            </h3>
            <a>3.1</a> <span>{t("section3.content1")}</span> <br />
            <a>3.2</a> <span>{t("section3.content2")}</span> <br /> <br />
            <h3>
               <span>{t("section4.title")}</span>
            </h3>
            <a>4.1</a> <span>{t("section4.content1")}</span> <br /> <br />
            <h3>
               <span>{t("section5.title")}</span>
            </h3>
            <a>5.1</a> <span>{t("section5.content1")}</span> <br /> <br />
            <h3>
               <span>{t("section6.title")}</span>
            </h3>
            <a>6.1</a> <span>{t("section6.content1")}</span> <br />
            <a>{t("section6.howWillNotify")}</a> <br />
            <a>{t("section6.subtitle1")}</a>{" "}
            <span>{t("section6.option1")}</span> <br />
            <a>{t("section6.or")}</a> <br /> <a>{t("section6.subtitle2")}</a>{" "}
            <span>{t("section6.option2")}</span> <br /> <br />
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
