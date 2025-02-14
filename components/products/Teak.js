"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function Conifer() {
   const tt = useTranslations("Teak");

   const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
   });

   const handleToggle = (key) => {
      if (isActive.key === key) {
         setIsActive({
            status: false,
         });
      } else {
         setIsActive({
            status: true,
            key,
         });
      }
   };
   const [isOpen, setOpen] = useState(false);
   return (
      <div className="container">
         <div className="row">
            {/* <div>
               <h2>Conifer Content</h2>
               <p>This is the conifer content.</p>
            </div> */}
            <div className="col-xl-6">
               <div className="testimonial-one__content">
                  <div className="faq-one__content-faq">
                     <div className="sec-title tg-heading-subheading animation-style2">
                        {/* <div className="sec-title__tagline">
                           <div className="line"></div>
                           <div className="text tg-element-title">
                              <h4>Teak</h4>
                           </div>
                           <div className="icon">
                              <span className="icon-plane2 float-bob-x3"></span>
                           </div>
                        </div> */}
                        <h2 className="sec-title__title tg-element-title">
                           {/* <span style={{ color: "#BA9B7F" }}>Thai teak</span> a
                           natural heritage for home aesthetics{" "} */}
                           <span style={{ color: "#BA9B7F" }}>
                              {tt("title1")}
                           </span>{" "}
                           {tt("title2")} {tt("title3")}
                        </h2>
                     </div>
                     <div
                        className="accrodion-grp teak-one-accrodion"
                        data-grp-name="teak-one-accrodion-1"
                     >
                        <div
                           className={
                              isActive.key == 1
                                 ? "accrodion active"
                                 : "accrodion"
                           }
                           onClick={() => handleToggle(1)}
                        >
                           <div className="accrodion-title">
                              <h4>{tt("faq1.que")}</h4>
                           </div>

                           <div className="accrodion-content">
                              <div className="inner">
                                 <p>{tt("faq1.ans")}</p>
                              </div>
                           </div>
                        </div>

                        <div
                           className={
                              isActive.key == 2
                                 ? "accrodion active"
                                 : "accrodion"
                           }
                           onClick={() => handleToggle(2)}
                        >
                           <div className="accrodion-title">
                              <h4>{tt("faq2.que")}</h4>
                           </div>

                           <div className="accrodion-content">
                              <div className="inner">
                                 <p>{tt("faq2.ans")}</p>
                              </div>
                           </div>
                        </div>

                        <div
                           className={
                              isActive.key == 3
                                 ? "accrodion active"
                                 : "accrodion"
                           }
                           onClick={() => handleToggle(3)}
                        >
                           <div className="accrodion-title">
                              <h4>{tt("faq3.que")}</h4>
                           </div>

                           <div className="accrodion-content">
                              <div className="inner">
                                 <p>{tt("faq3.ans")}</p>
                              </div>
                           </div>
                        </div>

                        <div
                           className={
                              isActive.key == 4
                                 ? "accrodion active"
                                 : "accrodion"
                           }
                           onClick={() => handleToggle(4)}
                        >
                           <div className="accrodion-title">
                              <h4>{tt("faq4.que")}</h4>
                           </div>

                           <div className="accrodion-content">
                              <div className="inner">
                                 <p>{tt("faq4.ans")}</p>
                              </div>
                           </div>
                        </div>
                        <div
                           className={
                              isActive.key == 5
                                 ? "accrodion active"
                                 : "accrodion"
                           }
                           onClick={() => handleToggle(5)}
                        >
                           <div className="accrodion-title">
                              <h4>{tt("faq5.que")}</h4>
                           </div>

                           <div className="accrodion-content">
                              <div className="inner">
                                 <p>{tt("faq5.ans")}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/*Start Testimonial One Img*/}
            <div className="col-xl-6">
               <div className="product-one__img">
                  <div className="testimonial-one__img1 reveal">
                     <img src="assets/images/product/teak1.png" alt="" />
                  </div>
               </div>
            </div>
            {/*End Testimonial One Img*/}
         </div>
      </div>
   );
}
