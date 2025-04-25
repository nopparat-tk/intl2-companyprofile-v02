"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const swiperOptions = {
   modules: [Autoplay, Pagination, Navigation],
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay: {
      delay: 6000,
      disableOnInteraction: false,
   },

   loop: true,

   // Navigation
   navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p",
   },

   // Pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
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
         slidesPerView: 3,
      },
      1350: {
         slidesPerView: 3,
      },
   },
};

export default function Service() {
   const s = useTranslations("ServicesArea");
   const c = useTranslations("ServicesCard");

   return (
      <>
         <section className="service-one" id="service">
            <div
               className="service-one__pattern"
               style={{
                  backgroundImage:
                     "url(assets/images/pattern/service-v1-pattern.jpg)",
               }}
            ></div>
            <div className="container">
               <div className="sec-title center text-center tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                     <div className="line"></div>
                     <div className="text tg-element-title">
                        <h4>{s("title")}</h4>
                        {""}
                     </div>
                     {/* <div className="icon">
                        <span className="icon-check float-bob-x3"></span>
                     </div> */}
                     <div className="line2"></div>
                  </div>

                  <h2 className="sec-title__title tg-element-title">
                     {s("sub_title1")}
                     <br />
                     <span>{s("sub_title2")}</span> {s("sub_title3")}
                  </h2>
               </div>

               <div className="row">
                  <div className="">
                     <Swiper
                        {...swiperOptions}
                        className="service-one__carousel owl-carousel owl-theme owl-dot-style1"
                     >
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-Delivery-img.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* All Area Delivery */}
                                       {/* <Link href="#"> </Link> */}
                                       {c("service1.title")}
                                    </h2>
                                    <p>
                                       {/* we have comprehensive transportation
                                       services that deliver to every area
                                       throughout Thailand. */}
                                       {c("service1.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-shipment"></span> */}
                                 <span>
                                    {" "}
                                    <img src="assets/images/services/Delivery.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-Packing-img2.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* Product Packing */}
                                       {/* <Link href="international-transport"></Link> */}
                                       {c("service2.title")}
                                    </h2>
                                    <p>
                                       {/* Items are wrapped with care in plastic
                                       and cushioning during delivery to
                                       increase safety and protect the wood. */}
                                       {c("service2.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-delivery-man"></span> */}
                                 <span>
                                    {" "}
                                    <img src="assets/images/services/Packing.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-CCA-img2.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* CCA Treatment */}
                                       {/* <Link href="international-transport"></Link> */}
                                       {c("service3.title")}
                                    </h2>
                                    <p>
                                       {/* For a long life of outdoor use, CCA
                                       treatment maximizes resistance to
                                       weather, fungi, and pests. */}
                                       {c("service3.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-international-shipping"></span> */}
                                 <span>
                                    {" "}
                                    <img src="assets/images/services/CCA.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-Wholesale-img4.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* CCA Treatment */}
                                       {/* <Link href="international-transport"></Link> */}
                                       {c("service4.title")}
                                    </h2>
                                    <p>
                                       {/* For a long life of outdoor use, CCA
treatment maximizes resistance to
weather, fungi, and pests. */}
                                       {c("service4.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-international-shipping"></span> */}
                                 <span>
                                    {" "}
                                    <img src="assets/images/services/Wholesale-service.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-Cutting-img3.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* Free! Cutting */}
                                       {/* <Link href="international-transport"></Link> */}
                                       {c("service5.title")}
                                    </h2>
                                    <p>
                                       {/* We offer cutting services when buying
                                       full pieces of wood, so our customers
                                       receive wood in the sizes desired. */}
                                       {c("service5.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-shipment"></span> */}
                                 <span>
                                    {" "}
                                    <img src="assets/images/services/Cutting.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="service-one__single">
                              <div className="service-one__single-inner">
                                 <div className="service-one__single-img">
                                    <img
                                       src="assets/images/services/service-Get Advice-img3.png"
                                       alt="#"
                                    />
                                 </div>

                                 <div className="service-one__single-content">
                                    <h2>
                                       {/* Get Advice */}
                                       {/* <Link href="international-transport"></Link> */}
                                       {c("service6.title")}
                                    </h2>
                                    <p>
                                       {/* You can ask us questions at any time. Our
                                       team of experts is ready to answer your
                                       inquiries. <br /> */}
                                       {c("service6.sm_des")}
                                    </p>
                                    <div className="btn-box">
                                       <a>
                                          <span className="icon-right-arrow">
                                             {" "}
                                          </span>
                                          {c("swipe")}{" "}
                                          <span className="icon-right-arrow1"></span>
                                       </a>
                                    </div>
                                 </div>
                              </div>

                              <div className="icon">
                                 {/* <span className="icon-international-shipping"></span> */}
                                 <span>
                                    <img src="assets/images/services/Advice.svg"></img>
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
