"use client";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";
import { useTranslations } from "next-intl";

export default function About() {
   const a = useTranslations("AboutArea");
   const p = useTranslations("HeaderBtn");

   return (
      <>
         <section className="about-one" id="about">
            <div className="container">
               <div className="row">
                  {/*Start About One Content*/}
                  <div className="col-xl-7">
                     <div className="about-one__content">
                        <div className="sec-title tg-heading-subheading animation-style2">
                           <div className="sec-title__tagline">
                              <div className="line"></div>
                              <div className="text tg-element-title">
                                 <h4>{a("title")}</h4>
                              </div>
                              <div className="line2"></div>
                              {/* <div className="icon">
                                 <span className="icon-global-services float-bob-x3"></span>
                              </div> */}
                           </div>
                           <h2 className="sec-title__title tg-element-title">
                              {/* Discover the beauty and strength of{" "}
                              <span> nature's </span>
                              <span> finest materials</span> */}
                              {a("sub_title1")} <span> {a("sub_title2")} </span>
                              <span> {a("sub_title3")}</span>
                           </h2>
                        </div>

                        <div className="about-one__content-text1">
                           <p>
                              {/* We're passionate about providing high-quality,
                              sustainable wood products that meet the diverse
                              needs of our customers. With over 15 years of
                              experience in the timber industry, we've built a
                              strong reputation for excellence and reliability. */}
                              {a("sm_des")}
                           </p>
                        </div>

                        <div className="about-one__content-text2">
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="about-one__content-text2-single">
                                    <div className="about-one__content-text2-single-top">
                                       <div className="icon">
                                          <span>
                                             <img
                                                style={{ width: "32px" }}
                                                src="assets/images/about/Environment.svg"
                                                alt=""
                                             />
                                          </span>
                                       </div>

                                       <div className="title-box">
                                          <h3>
                                             {/*Environmentally Friendly*/}
                                             {a("card1_title")}
                                          </h3>
                                       </div>
                                    </div>

                                    <p>
                                       {/* Our commitment to sustainable practices
                                       means that you can trust that our wood is
                                       sourced responsibly */}
                                       {a("card1_des")}
                                    </p>
                                 </div>
                              </div>

                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="about-one__content-text2-single">
                                    <div className="about-one__content-text2-single-top">
                                       <div className="icon">
                                          <span>
                                             <img
                                                style={{ width: "32px" }}
                                                src="assets/images/about/Carving.svg"
                                                alt=""
                                             />
                                          </span>
                                       </div>

                                       <div className="title-box">
                                          <h3>
                                             {/* For woodworkers of all levels */}
                                             {a("card2_title")}
                                          </h3>
                                       </div>
                                    </div>

                                    <p>
                                       {/* For stunning DIY crafts and durable
                                       structures alike, our wood is the perfect
                                       choice. Contact us to learn more */}
                                       {a("card2_des")}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="about-one__content-bottom">
                           {/* <div className="btn-box">
                              <Link className="thm-btn" href="about">
                                 More About Us
                                 <i className="icon-right-arrow21"></i>
                                 <span className="hover-btn hover-bx"></span>
                                 <span className="hover-btn hover-bx2"></span>
                                 <span className="hover-btn hover-bx3"></span>
                                 <span className="hover-btn hover-bx4"></span>
                              </Link>
                           </div> */}

                           <div className="contact-box">
                              <div className="icon">
                                 <span className="icon-phone2"></span>
                              </div>

                              <div className="text-box">
                                 <p>{p("phone_des")}</p>
                                 <h4>
                                    <Link href={`tel:${p("phone_no")}`}>
                                       {p("phone_no")}
                                    </Link>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*End About One Content*/}

                  {/*Start About One Img*/}
                  <div className="about-one__img-box col-xl-5 ">
                     <div className="about-one__img">
                        {/* <div className="shape1 float-bob-y">
                           <img
                              src="assets/images/shapes/about-v1-shape1.png"
                              alt=""
                           />
                        </div> */}
                        <div className="shape2 float-bob-y">
                           <img
                              src="assets/images/shapes/about-v1-shape2.png"
                              alt=""
                           />
                        </div>
                        <div className="about-one__img1 reveal">
                           <img
                              src="assets/images/about/about-v1-img3.png"
                              alt=""
                           />
                        </div>

                        <div className="about-one__img2">
                           <div className="about-one__img2-inner reveal">
                              <img
                                 src="assets/images/about/about-v4-img2.png"
                                 alt=""
                              />
                           </div>

                           <div className="about-one__circle-text">
                              <div className="about-one__round-text-box">
                                 <div className="inner">
                                    <div className="about-one__curved-circle rotate-me">
                                       <ReactCurvedText
                                          width="150"
                                          height="150"
                                          cx="75"
                                          cy="75"
                                          rx="55"
                                          ry="55"
                                          startOffset="0"
                                          reversed={true}
                                          text="SAK WOODWORKS SINCE 2016"
                                          textProps={{
                                             style: { fontSize: "14" },
                                          }}
                                          textPathProps={{ fill: "#ffffff" }}
                                          tspanProps={null}
                                          ellipseProps={null}
                                          svgProps={null}
                                       />
                                    </div>
                                 </div>
                                 <div className="overlay-icon-box">
                                    <Link href="#">
                                       {/* <i className="icon-location1"></i> */}
                                       <img
                                          src="assets/images/icon/symbol.svg"
                                          style={{ width: "64px" }}
                                       />
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="shape3 float-bob-y">
                              <img
                                 src="assets/images/shapes/about-v1-shape3.png"
                                 alt=""
                              />
                           </div> */}
                        </div>
                     </div>
                  </div>
                  {/*End About One Img*/}
               </div>
            </div>
         </section>
      </>
   );
}
