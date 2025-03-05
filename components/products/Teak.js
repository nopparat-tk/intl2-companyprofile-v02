"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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

   const [slideOpen, setSlideOpen] = useState(false);

   const images = [
      { src: `assets/images/product/${tt("images.img1")}` },
      { src: `assets/images/product/${tt("images.img2")}` },
      { src: `assets/images/product/${tt("images.img3")}` },
      { src: `assets/images/product/${tt("images.img4")}` },
      { src: `assets/images/product/${tt("images.img5")}` },
      { src: `assets/images/product/${tt("images.img6")}` },
      { src: `assets/images/product/${tt("images.img7")}` },
      { src: `assets/images/product/${tt("images.img8")}` },
      { src: `assets/images/product/${tt("images.img9")}` },
      { src: `assets/images/product/${tt("images.img10")}` },
      { src: `assets/images/product/${tt("images.img11")}` },
      { src: `assets/images/product/${tt("images.img12")}` },
   ];

   const handleImagePopup = (i) => {
      setSlideOpen(true);
   };
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
                     <button
                        className="teak-btn"
                        onClick={() => handleImagePopup(0)}
                     >
                        <a>
                           Click to View <i className="fas fa-expand"></i>
                        </a>
                     </button>
                     {/* <img src="assets/images/product/teak1.png" alt="" /> */}
                     <img
                        onClick={() => handleImagePopup(0)}
                        style={{ cursor: "pointer" }}
                        src={images[0].src}
                        alt="Thai teak"
                     />
                     <Lightbox
                        open={slideOpen}
                        close={() => setSlideOpen(false)}
                        slides={images}
                        plugins={[Zoom]}
                        styles={{
                           container: {
                              backgroundColor: "rgba(0, 0, 0, 0.65)",
                           },
                        }}
                     />
                  </div>
               </div>
            </div>
            {/*End Testimonial One Img*/}
         </div>
      </div>
   );
}
