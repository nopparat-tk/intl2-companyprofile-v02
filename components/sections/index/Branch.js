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
      delay: 5000,
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
                              <div className="pricing-two__single">
                                 <div className="pricing-two__single-inner">
                                    <div className="table-header">
                                       <div className="img-box">
                                          <img
                                             src="assets/images/branch/store_1.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="title-box text-center">
                                          {/* <h2>Pathum Thani</h2> */}
                                          <h2>{bd("branch_1")}</h2>
                                          {/* <h3>
                                             $99 <span>/50kg</span>
                                          </h3> */}
                                       </div>
                                    </div>

                                    <div className="table-content">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-map"></span>
                                             </div>
                                             <div className="text-box">
                                                {/* <p>
                                                   39/4 Soi Tawan-Ok 26, Moo 5,
                                                   Khlong Si Subdistrict, Khlong
                                                   Luang District, Pathum Thani
                                                   Province 12120
                                                </p> */}
                                                <p>{bd("add_1")}</p>
                                             </div>
                                          </li>

                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-phone-alt"></span>
                                             </div>
                                             <div className="text-box">
                                                <Link
                                                   href={`tel:${bd("phone_1")}`}
                                                >
                                                   {bd("phone_1")}
                                                </Link>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                        {/*End Brnch One*/}

                        {/*Start Brach Two*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInDown" data-wow-delay=".3s">
                              <div className="pricing-one__single">
                                 <div className="pricing-one__single-inner">
                                    <div className="table-header">
                                       <div className="img-box">
                                          <img
                                             src="assets/images/branch/store_2.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="title-box text-center">
                                          {/* <h2>Pathum Thani</h2> */}
                                          <h2>{bd("branch_2")}</h2>
                                       </div>
                                    </div>

                                    <div className="table-content">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-map"></span>
                                             </div>
                                             <div className="text-box">
                                                {/* <p>
                                                   39 Soi Tawan-Ok 26, Moo 5,{" "}
                                                   <br /> Khlong Si Subdistrict,
                                                   Khlong Luang District, Pathum
                                                   Thani Province 12120
                                                </p> */}
                                                <p>{bd("add_2")}</p>
                                             </div>
                                          </li>

                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-phone-alt"></span>
                                             </div>
                                             <div className="text-box">
                                                <Link
                                                   href={`tel:${bd("phone_2")}`}
                                                >
                                                   {bd("phone_2")}
                                                </Link>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                        {/*End Brach Two*/}

                        {/*Start Brnch Three*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInUp" data-wow-delay=".3s">
                              <div className="pricing-two__single">
                                 <div className="pricing-two__single-inner">
                                    <div className="table-header">
                                       <div className="img-box">
                                          <img
                                             src="assets/images/branch/store_3.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="title-box text-center">
                                          {/* <h2>Chiang Mai</h2> */}
                                          <h2>{bd("branch_3")}</h2>
                                       </div>
                                    </div>

                                    <div className="table-content">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-map"></span>
                                             </div>
                                             <div className="text-box">
                                                {/* <p>
                                                   411 Moo 4, San Sai Noi
                                                   Subdistrict, San Sai
                                                   District, Chiang Mai Province
                                                   50210
                                                </p> */}
                                                <p>{bd("add_3")}</p>
                                             </div>
                                          </li>

                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-phone-alt"></span>
                                             </div>
                                             <div className="text-box">
                                                <Link
                                                   href={`tel:${bd("phone_3")}`}
                                                >
                                                   {bd("phone_3")}
                                                </Link>{" "}
                                                ,{" "}
                                                <Link
                                                   href={`tel:${bd(
                                                      "mobile_3"
                                                   )}`}
                                                >
                                                   {bd("mobile_3")}
                                                </Link>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                        {/*End Brnch Three*/}

                        {/*Start Brach Four*/}
                        <SwiperSlide style={{ cursor: "pointer" }}>
                           <div className="wow fadeInDown" data-wow-delay=".3s">
                              <div className="pricing-one__single">
                                 <div className="pricing-one__single-inner">
                                    <div className="table-header">
                                       <div className="img-box">
                                          <img
                                             src="assets/images/branch/store_4.png"
                                             alt=""
                                          />
                                       </div>
                                       <div className="title-box text-center">
                                          {/* <h2>Chanthaburi</h2> */}
                                          <h2>{bd("branch_4")}</h2>
                                       </div>
                                    </div>

                                    <div className="table-content">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-map"></span>
                                             </div>
                                             <div className="text-box">
                                                {/* <p>
                                                   16/7 Sai Trok Nong Road,{" "}
                                                   <br /> Khlung Subdistrict,
                                                   Khlung District, Chanthaburi
                                                   Province 22110
                                                </p> */}
                                                <p>{bd("add_4")}</p>
                                             </div>
                                          </li>

                                          <li>
                                             <div className="icon">
                                                <span className="fa fa-phone-alt"></span>
                                             </div>
                                             <div className="text-box">
                                                <Link
                                                   href={`tel:${bd("phone_4")}`}
                                                >
                                                   {bd("phone_4")}
                                                </Link>{" "}
                                                ,{" "}
                                                <Link
                                                   href={`tel:${bd(
                                                      "mobile_4"
                                                   )}`}
                                                >
                                                   {bd("mobile_4")}
                                                </Link>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                        {/*End Brach Four*/}
                     </Swiper>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
