"use client";
import React, { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import Branch1 from "../../layout/Branch/Branch1";
import Branch2 from "../../layout/Branch/Branch2";
import Branch3 from "../../layout/Branch/Branch3";
import Branch4 from "../../layout/Branch/Branch4";

const swiperOptions = {
   modules: [Autoplay, Navigation],
   slidesPerView: 3,
   spaceBetween: 30,
   // autoplay: {
   //    delay: 5000,
   //    disableOnInteraction: false,
   // },

   loop: true,

   // Navigation
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   // Pagination
   // pagination: {
   //    el: ".swiper-pagination",
   //    clickable: true,
   // },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      575: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 2,
      },
      1199: {
         slidesPerView: 2,
      },
      1350: {
         slidesPerView: 2,
      },
   },
};
export default function Pricing() {
   const ba = useTranslations("BranchArea");
   const bd = useTranslations("BranchData");

   return (
      <>
         <section className="branch-one" id="branch">
            <div
               className="pricing-one__pattern"
               style={{
                  backgroundImage:
                     "url(assets/images/pattern/pricing-v1-pattern.png)",
               }}
            ></div>
            <div className="container">
               <div className="sec-title center text-center tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                     <div className="line"></div>
                     <div className="text tg-element-title">
                        <h4>
                           {/* Our Branches */}
                           {ba("title")}
                        </h4>
                     </div>
                     <div className="line2"></div>
                     {/* <div className="icon">
                        <span className="icon-plane2 float-bob-x3"></span>
                     </div> */}
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                     {ba("sub_title1")} <br /> {ba("sub_title2")}{" "}
                     <span>{ba("sub_title3")}</span>
                     {/* Choose your wood products <br /> directly at{" "}
                     <span>our storefronts</span> */}
                  </h2>
               </div>

               <div className="row justify-content-center">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-8">
                     <Swiper
                        {...swiperOptions}
                        className="swiper swiper-initialized swiper-horizontal service-one__carousel owl-carousel owl-theme owl-dot-style1 swiper-backface-hidden"
                     >
                        {/*Start Brnch One*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInUp" data-wow-delay=".3s">
                              <Branch1 />
                           </div>
                        </SwiperSlide>
                        {/*End Brnch One*/}

                        {/*Start Brach Two*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInDown" data-wow-delay=".3s">
                              <Branch2 />
                           </div>
                        </SwiperSlide>
                        {/*End Brach Two*/}

                        {/*Start Brnch Three*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInUp" data-wow-delay=".3s">
                              <Branch3 />
                           </div>
                        </SwiperSlide>
                        {/*End Brnch Three*/}

                        {/*Start Brach Four*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInDown" data-wow-delay=".3s">
                              <Branch4 />
                           </div>
                        </SwiperSlide>
                        {/*End Brach Four*/}
                     </Swiper>
                     <div className="swiper-button-prev"></div>
                     <div className="swiper-button-next"></div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
