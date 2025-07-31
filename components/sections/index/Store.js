"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 5,
    },
    1350: {
      slidesPerView: 6,
    },
  },
};

export default function WhyChooseUs() {
  const st = useTranslations("BrandArea");
  const sd = useTranslations("BrandData");

  return (
    <>
      <section className="store-one" id="store">
        <div className="store-one__pattern">
          <img src="assets/images/pattern/store-pattern.png" alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="why-choose-one__content">
              <div className="sec-title center text-center tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>
                      {/* Locate Our Products */}

                      {st("title")}
                    </h4>
                  </div>
                  <div className="line2"></div>
                  {/* <div className="icon">
                              <span className="icon-check float-bob-x3"></span>
                           </div> */}
                </div>
                <h2 className="sec-title__title tg-element-title">
                  {/* Find our products at leading <br />{" "}
                           <span> retailers </span> &{" "}
                           <span> online platforms </span> */}
                  {st("sub_title1")} <br /> <span> {st("sub_title2")} </span>{" "}
                  {st("sub_title3")} <span> {st("sub_title4")} </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...swiperOptions}
              className="brand-one__carousel owl-carousel owl-theme"
            >
              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://shopee.co.th/sakwoodworks"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand01.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Shopee</p> */}
                        <p>{sd("brand_1")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.thaiwatsadu.com/th/brand/SAK%20WOODWORKS"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand04.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Thaiwatsadu</p> */}
                        <p>{sd("brand_4")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.lazada.co.th/shop/sak-woodworks/"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand02.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Lazada</p> */}
                        <p>{sd("brand_2")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.homepro.co.th/search?searchtype=&q=sak+woodworks"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand03.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>HomePro</p> */}
                        <p>{sd("brand_3")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://nocnoc.com/sl/SAK-WoodWorks/267885?area=pdp-sellerProfile-10409699"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand05.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>NocNoc</p> */}
                        <p>{sd("brand_5")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.bnbhome.com/th/brand/SAK%20WOODWORKS"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand06.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>BnB Home</p> */}
                        <p>{sd("brand_6")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="http://th1268030936ctqi.trustpass.alibaba.com"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand07.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Alibaba</p> */}
                        <p>{sd("brand_7")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link href="#">
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand08.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>OneStockHome</p> */}
                        <p>{sd("brand_8")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://shopee.co.th/sakwoodworks"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand01.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Shopee</p> */}
                        <p>{sd("brand_1")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.thaiwatsadu.com/th/brand/SAK%20WOODWORKS"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand04.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Thaiwatsadu</p> */}
                        <p>{sd("brand_4")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.lazada.co.th/shop/sak-woodworks/"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand02.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Lazada</p> */}
                        <p>{sd("brand_2")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.homepro.co.th/search?searchtype=&q=sak+woodworks"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand03.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>HomePro</p> */}
                        <p>{sd("brand_3")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://nocnoc.com/sl/SAK-WoodWorks/267885?area=pdp-sellerProfile-10409699"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand05.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>NocNoc</p> */}
                        <p>{sd("brand_5")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="https://www.bnbhome.com/th/brand/SAK%20WOODWORKS"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand06.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>BnB Home</p> */}
                        <p>{sd("brand_6")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link
                      href="http://th1268030936ctqi.trustpass.alibaba.com"
                      target="_blank"
                    >
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand07.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>Alibaba</p> */}
                        <p>{sd("brand_7")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="brand-one__single text-center">
                  <div className="brand-one__single-inner">
                    <Link href="#">
                      <div className="brand-one__image">
                        <img src="assets/images/brand/brand08.svg" alt="" />
                      </div>
                      <div>
                        {/* <p>OneStockHome</p> */}
                        <p>{sd("brand_8")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
