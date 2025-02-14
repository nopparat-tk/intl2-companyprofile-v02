"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const swiperOptions = {
   modules: [Autoplay, Pagination, Navigation],
   slidesPerView: 1,
   spaceBetween: 0,
   autoplay: {
      delay: 8000,
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
};

export default function Banner() {
   const t = useTranslations("HeroTitle");
   const s = useTranslations("HeroSlider");
   return (
      <>
         <section className="slider-one">
            <div className="">
               <Swiper
                  {...swiperOptions}
                  className="slider-one__carousel owl-carousel owl-theme"
               >
                  <SwiperSlide>
                     <div className="slider-one__single">
                        <div
                           className="slider-one__single-bg"
                           style={{
                              backgroundImage:
                                 "url(assets/images/banner/banner1.png)",
                           }}
                        ></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="container">
                           <div className="slider-one__single-inner">
                              <div className="slider-one__single-content">
                                 <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text">
                                       <span>{t("title1")}</span>
                                    </div>
                                 </div>

                                 <div className="title-box">
                                    <h2>
                                       {/* We have over 15 years of knowledge and{" "}
                                       <br />
                                       expertise in importing and distributing{" "}
                                       <br />
                                       high-quality northern conifer wood */}
                                       {s("slide1")}
                                    </h2>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-one__single">
                        <div
                           className="slider-one__single-bg"
                           style={{
                              backgroundImage:
                                 "url(assets/images/banner/banner2.png)",
                           }}
                        ></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="container">
                           <div className="slider-one__single-inner">
                              <div className="slider-one__single-content">
                                 <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text">
                                       <span>{t("title2")}</span>
                                    </div>
                                 </div>

                                 <div className="title-box">
                                    <h2>
                                       {/* Leveraging our expertise and <br />
                                       extensive network to deliver products
                                       <br />
                                       that surpass global quality standards */}
                                       {s("slide2")}
                                    </h2>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-one__single">
                        <div
                           className="slider-one__single-bg"
                           style={{
                              backgroundImage:
                                 "url(assets/images/banner/banner3.png)",
                           }}
                        ></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="container">
                           <div className="slider-one__single-inner">
                              <div className="slider-one__single-content">
                                 <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text">
                                       <span>{t("title3")}</span>
                                    </div>
                                 </div>

                                 <div className="title-box">
                                    <h2>
                                       {/* A modern and efficient production <br />
                                       process utilizing expert technicians{" "}
                                       <br />
                                       and cutting-edge technology. */}
                                       {s("slide3")}
                                    </h2>
                                 </div>

                                 {/* <div className="text-box">
                                    <p>
                                       Take your business to the next level with
                                       Loraic new business management tools.
                                       Loraic will open a new horizon for us.{" "}
                                    </p>
                                 </div> */}

                                 {/* <div className="btn-box">
                                    <Link className="thm-btn" href="about">
                                       Explore More
                                       <i className="icon-right-arrow21"></i>
                                       <span className="hover-btn hover-bx"></span>
                                       <span className="hover-btn hover-bx2"></span>
                                       <span className="hover-btn hover-bx3"></span>
                                       <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-one__single">
                        <div
                           className="slider-one__single-bg"
                           style={{
                              backgroundImage:
                                 "url(assets/images/banner/banner4.png)",
                           }}
                        ></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="container">
                           <div className="slider-one__single-inner">
                              <div className="slider-one__single-content">
                                 <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text">
                                       <span>{t("title4")}</span>
                                    </div>
                                 </div>

                                 <div className="title-box">
                                    <h2>
                                       {/* A stronger, more durable wood <br />
                                       with a long service life and suitable
                                       <br />
                                       for all weather conditions in Thailand */}
                                       {s("slide4")}
                                    </h2>
                                 </div>

                                 {/* <div className="text-box">
                                    <p>
                                       Take your business to the next level with
                                       Loraic new business management tools.
                                       Loraic will open a new horizon for us.{" "}
                                    </p>
                                 </div> */}

                                 {/* <div className="btn-box">
                                    <Link className="thm-btn" href="about">
                                       Explore More
                                       <i className="icon-right-arrow21"></i>
                                       <span className="hover-btn hover-bx"></span>
                                       <span className="hover-btn hover-bx2"></span>
                                       <span className="hover-btn hover-bx3"></span>
                                       <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="slider-one__single">
                        <div
                           className="slider-one__single-bg"
                           style={{
                              backgroundImage:
                                 "url(assets/images/banner/banner5.png)",
                           }}
                        ></div>
                        <div className="shape1"></div>
                        <div className="shape2"></div>
                        <div className="shape3"></div>
                        <div className="shape4"></div>
                        <div className="container">
                           <div className="slider-one__single-inner">
                              <div className="slider-one__single-content">
                                 <div className="tagline">
                                    <div className="round"></div>
                                    <div className="text">
                                       <span>{t("title5")}</span>
                                    </div>
                                 </div>

                                 <div className="title-box">
                                    <h2>
                                       {/* Transported from Europe and Russia <br />
                                       chemical-free, passing over 16,000 km.
                                       <br /> to Laem Chabang Port in Thailand. */}
                                       {s("slide5")}
                                    </h2>
                                 </div>

                                 {/* <div className="text-box">
                                    <p>
                                       Take your business to the next level with
                                       Loraic new business management tools.
                                       Loraic will open a new horizon for us.{" "}
                                    </p>
                                 </div> */}

                                 {/* <div className="btn-box">
                                    <Link className="thm-btn" href="about">
                                       Explore More
                                       <i className="icon-right-arrow21"></i>
                                       <span className="hover-btn hover-bx"></span>
                                       <span className="hover-btn hover-bx2"></span>
                                       <span className="hover-btn hover-bx3"></span>
                                       <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </section>
      </>
   );
}
