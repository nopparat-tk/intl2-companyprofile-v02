"use client";

import { useState } from "react";
import Conifer from "@/components/products/Conifer";
import Bamboo from "@/components/products/Bamboo";
import Teak from "@/components/products/Teak";
import { useTranslations } from "next-intl";
import "../../../public/assets/css/module-css/product.css";

export default function Product_accordian() {
   const p = useTranslations("ProductArea");
   const n = useTranslations("ProductNavTab");

   const [activeTab, setActiveTab] = useState("conifer");
   const [activeAccordion, setActiveAccordion] = useState(null);

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };

   const handleAccordionChange = (section) => {
      setActiveAccordion(activeAccordion === section ? null : section);
   };

   return (
      <>
         <section className="product-one" id="product">
            {/* Background Image */}
            <div
               className="testimonial-one__pattern"
               style={{
                  backgroundImage:
                     "url(assets/images/pattern/products-v2-pattern.png)",
               }}
            ></div>
            <div className="container">
               {/* Title */}
               <div className="row">
                  <div className="sec-title center text-center tg-heading-subheading animation-style2">
                     <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                           <h4>{p("title")}</h4>
                        </div>
                        <div className="line2"></div>
                     </div>
                     <h2 className="sec-title__title tg-element-title">
                        {p("sub_title1")}
                        <br /> <span>{p("sub_title2")}</span>
                     </h2>
                  </div>
               </div>
               <div className="row">
                  {/* Desktop View */}
                  <div className="col-xl-6">
                     <div className="product-menu">
                        <ul className="nav nav-tabs nav-fill">
                           <li className="conifer-menu nav-item">
                              <button
                                 className={`nav-link ${
                                    activeTab === "conifer" ? "active" : ""
                                 }`}
                                 onClick={() => handleTabChange("conifer")}
                              >
                                 {n("conifer")}
                              </button>
                           </li>
                           <li className="bamboo-menu nav-item">
                              <button
                                 className={`nav-link ${
                                    activeTab === "bamboo" ? "active" : ""
                                 }`}
                                 onClick={() => handleTabChange("bamboo")}
                              >
                                 {n("bamboo")}
                              </button>
                           </li>
                           <li className="teak-menu nav-item">
                              <button
                                 className={`nav-link ${
                                    activeTab === "teak" ? "active" : ""
                                 }`}
                                 onClick={() => handleTabChange("teak")}
                              >
                                 {n("teak")}
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="product-content">
                     {activeTab === "conifer" && <Conifer />}
                     {activeTab === "bamboo" && <Bamboo />}
                     {activeTab === "teak" && <Teak />}
                  </div>

                  {/* Mobile View */}
                  <div className="accordion">
                     <div className="accordion-item conifer">
                        <div
                           className={
                              activeAccordion === "conifer"
                                 ? "accordion-conifer active"
                                 : "accordion-conifer"
                           }
                           onClick={() => handleAccordionChange("conifer")}
                        >
                           <h5>{n("conifer")}</h5>
                        </div>
                        <div
                           className={`accordion-content ${
                              activeAccordion === "conifer" ? "active" : ""
                           }`}
                        >
                           <Conifer />
                        </div>
                     </div>
                     <div className="accordion-item bamboo">
                        <div
                           className={
                              activeAccordion === "bamboo"
                                 ? "accordion-bamboo active"
                                 : "accordion-bamboo"
                           }
                           onClick={() => handleAccordionChange("bamboo")}
                        >
                           <h5>{n("bamboo")}</h5>
                        </div>
                        <div
                           className={`accordion-content ${
                              activeAccordion === "bamboo" ? "active" : ""
                           }`}
                        >
                           <Bamboo />
                        </div>
                     </div>
                     <div className="accordion-item teak">
                        <div
                           className={
                              activeAccordion === "teak"
                                 ? "accordion-teak active"
                                 : "accordion-teak"
                           }
                           onClick={() => handleAccordionChange("teak")}
                        >
                           <h5>{n("teak")}</h5>
                        </div>
                        <div
                           className={`accordion-content ${
                              activeAccordion === "teak" ? "active" : ""
                           }`}
                        >
                           <Teak />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
