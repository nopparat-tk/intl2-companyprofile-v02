import Link from "next/link";

export default function WhyChooseUs() {
   return (
      <>
         <section className="contact-one">
            <div className="contact-one__pattern">
               <img
                  src="assets/images/pattern/why-choose-v1-pattern.png"
                  alt=""
               />
            </div>
            <div className="shape1 float-bob-y">
               <img
                  src="assets/images/shapes/why-choose-v1-shape1.png"
                  alt=""
               />
            </div>
            <div className="container">
               <div className="row">
                  {/*Start Why Choose One Content*/}
                  <div className="col-xl-6">
                     <div className="contact-one__content">
                        <div className="sec-title tg-heading-subheading animation-style2">
                           <div className="sec-title__tagline">
                              <div className="line"></div>
                              <div className="text tg-element-title">
                                 <h4>Contact us</h4>
                              </div>
                              <div className="icon">
                                 <span className="icon-plane2 float-bob-x3"></span>
                              </div>
                           </div>
                           <h2 className="sec-title__title tg-element-title">
                              Easily contact us. Send us a <span> direct </span>
                              <span>message </span> here
                           </h2>
                        </div>
                        <div className="contact-one__title-box">
                           <h4>Sak Woodworks Co., Ltd.</h4>
                        </div>

                        <div className="contact-one__content-list">
                           <ul>
                              <li>
                                 <p>
                                    <span className="fa fa-phone"></span> Mon to
                                    Sat : 08:00 - 17:00
                                 </p>
                                 <p>
                                    <span
                                       className="fa fa-phone"
                                       style={{ opacity: "0" }}
                                    ></span>{" "}
                                    <span className="text-box">
                                       <Link href="tel:020261149">
                                          020 261 149
                                       </Link>{" "}
                                       ,{" "}
                                       <Link href="tel:039441191">
                                          039 441 191
                                       </Link>
                                    </span>{" "}
                                 </p>
                              </li>

                              <li>
                                 <p>
                                    <span className="fa fa-envelope-open-text"></span>{" "}
                                    Do you have a question?
                                 </p>
                                 <p>
                                    <span
                                       className="fa fa-phone"
                                       style={{ opacity: "0" }}
                                    ></span>{" "}
                                    <span className="text-box">
                                       <Link href="mailto:info@sakww.com">
                                          info@sakww.com
                                       </Link>
                                    </span>
                                 </p>
                              </li>

                              <li>
                                 <p>
                                    <span className="fa fa-share-alt"></span>{" "}
                                    Social Networks
                                 </p>
                                 <p className="d-flex justify-content-between col-4">
                                    <span
                                       className="fa fa-share-alt"
                                       style={{ opacity: "0" }}
                                    ></span>{" "}
                                    <span
                                       className="d-flex justify-content-between col-10"
                                       style={{ fontSize: "20px" }}
                                    >
                                       <Link
                                          className="fab fa-facebook-square"
                                          href="https://www.facebook.com/Sakwwth"
                                       ></Link>
                                       <Link
                                          className="fab fa-youtube"
                                          href="https://www.facebook.com/Sakwwth"
                                       ></Link>
                                       <Link
                                          className="fab fa-tiktok"
                                          href="https://www.tiktok.com/@sakwoodworks"
                                       ></Link>
                                       <Link
                                          className="fab fa-instagram"
                                          href="https://www.instagram.com/sakwoodworks"
                                       ></Link>
                                       <Link
                                          className="fab fa-line"
                                          href="https://lin.ee/smwoT3j"
                                       ></Link>
                                    </span>
                                 </p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/*End Why Choose One Content*/}

                  {/*Start Why Choose One Form*/}
                  <div className="col-xl-6">
                     <div
                        className="contact-one__form-box wow fadeInRight"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                     >
                        <div className="title-box">
                           <h2>Request a Quote</h2>
                        </div>

                        <form
                           className="contact-form-validated why-choose-one__form"
                           action="assets/inc/sendemail.php"
                           method="post"
                        >
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       name="name"
                                       placeholder="Name"
                                       required=""
                                    />
                                    <div className="icon">
                                       <span className="icon-user"></span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="input-box">
                                    <input
                                       type="email"
                                       name="email"
                                       placeholder="Email"
                                       required=""
                                    />
                                    <div className="icon">
                                       <span className="icon-email"></span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       name="Phone"
                                       placeholder="Phone"
                                       required=""
                                    />
                                    <div className="icon">
                                       <span className="icon-phone2"></span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       name="LineID"
                                       placeholder="Line ID"
                                       required=""
                                    />
                                    <div className="icon">
                                       <span className="far fa-user"></span>
                                    </div>
                                 </div>
                              </div>

                              <div className="col-xl-12">
                                 <div className="input-box">
                                    <textarea
                                       name="message"
                                       placeholder="Message"
                                    ></textarea>
                                    <div className="icon style2">
                                       <span className="icon-pen"></span>
                                    </div>
                                 </div>
                              </div>

                              <div className="col-xl-12">
                                 <div className="why-choose-one__form-btn">
                                    <button type="submit" className="thm-btn">
                                       Submit Now
                                       <i className="icon-right-arrow21"></i>
                                       <span className="hover-btn hover-bx"></span>
                                       <span className="hover-btn hover-bx2"></span>
                                       <span className="hover-btn hover-bx3"></span>
                                       <span className="hover-btn hover-bx4"></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="result"></div>
                     </div>
                  </div>
                  {/*End Why Choose One Form*/}
               </div>
            </div>
         </section>
      </>
   );
}
