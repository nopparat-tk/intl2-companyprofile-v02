"use client";

import { useState } from "react";
import Conifer from "@/components/products/Conifer";
import Bamboo from "@/components/products/Bamboo";
import Teak from "@/components/products/Teak";
import { useTranslations } from "next-intl";

export default function Product() {
   const p = useTranslations("ProductArea");
   const n = useTranslations("ProductNavTab");

   const [activeTab, setActiveTab] = useState("conifer");

   const handleTabChange = (tab) => {
      setActiveTab(tab);
   };
   return (
      <>
         <section className="product-one" id="product">
            <div
               className="testimonial-one__pattern"
               style={{
                  backgroundImage:
                     "url(assets/images/pattern/products-v2-pattern.png)",
               }}
            ></div>
            <div className="container">
               <div className="row">
                  {/*Start Product Content*/}
                  {/* <div className="col-xl-6">
                     <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                           <div className="line"></div>
                           <div className="text tg-element-title">
                              <h4>Our Products</h4>
                           </div>
                           <div className="icon">
                              <span className="icon-plane2 float-bob-x3"></span>
                           </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">
                           New options for woodworking with{" "}
                           <span>premium quality </span>
                           <span>products </span>
                        </h2>
                     </div>
                  </div> */}
                  {/*End Product Content*/}

                  {/* nav-tab */}
                  {/* <div className="col-xl-6 f-right">
                     <ul className="nav nav-pills">
                        <li className="nav-item">
                           <button
                              className={`nav-link ${
                                 activeTab === "conifer" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("conifer")}
                           >
                              Conifer
                           </button>
                        </li>
                        <li className="nav-item">
                           <button
                              className={`nav-link ${
                                 activeTab === "bamboo" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("bamboo")}
                           >
                              Bamboo
                           </button>
                        </li>
                        <li className="nav-item">
                           <button
                              className={`nav-link ${
                                 activeTab === "teak" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("teak")}
                           >
                              Teak
                           </button>
                        </li>
                     </ul>
                  </div> */}
                  {/* end nav-tab */}
                  <div className="sec-title center text-center tg-heading-subheading animation-style2">
                     <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                           <h4>{p("title")}</h4>
                        </div>
                        <div className="line2"></div>
                        {/* <div className="icon">
                           <span className="icon-check float-bob-x3"></span>
                        </div> */}
                     </div>
                     <h2 className="sec-title__title tg-element-title">
                        {p("sub_title1")}
                        <br />{" "}
                        <span>
                           {/* premium quality products */}
                           {p("sub_title2")}
                        </span>
                     </h2>
                  </div>
               </div>
               <div className="row">
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

                  {activeTab === "conifer" && <Conifer />}
                  {activeTab === "bamboo" && <Bamboo />}
                  {activeTab === "teak" && <Teak />}
               </div>
            </div>
         </section>
      </>
   );
}
