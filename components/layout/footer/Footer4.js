import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer4() {
   const f = useTranslations("Footer");
   const t = useTranslations("HeaderBtn");

   return (
      <>
         {/*Start Footer Four*/}
         <footer className="footer-one footer-one--two">
            <div className="footer-one__pattern">
               <img
                  src="/assets/images/pattern/footer-v1-pattern.png"
                  alt="#"
               />
            </div>
            {/* <div className="shape3 float-bob-y">
               <img src="assets/images/shapes/footer-v2-shape3.png" alt="" />
            </div> */}
            <div className="footer-four__top">
               <div className="container">
                  <div className="footer-one--two__cta">
                     <div className="shape1">
                        <img
                           className="float-bob-x3"
                           src="/assets/images/shapes/footer-v2-shape2.png"
                           alt=""
                        />
                     </div>
                     {/* <div className="shape2">
                        <img
                           className="float-bob-y"
                           src="assets/images/shapes/footer-v2-shape1.png"
                           alt=""
                        />
                     </div> */}
                     <div className="footer-one--two__cta-inner">
                        <div className="text-box">
                           {/* <h2>Looking for nature's finest materials!</h2> */}
                           <h2> {f("title")} </h2>
                        </div>

                        <div className="btn-box">
                           <Link
                              className="thm-btn"
                              href={`tel:${t("phone_no")}`}
                           >
                              <i
                                 className="icon-phone"
                                 style={{ paddingRight: "8px" }}
                              ></i>
                              {/* Give us a call */}
                              {f("btn_text")}
                              <span className="hover-btn hover-bx"></span>
                              <span className="hover-btn hover-bx2"></span>
                              <span className="hover-btn hover-bx3"></span>
                              <span className="hover-btn hover-bx4"></span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="footer-one__bottom">
               <div className="container">
                  <div
                     className="footer-one__bottom-inner"
                     style={{ border: "none" }}
                  >
                     <div className="footer-one__bottom-text">
                        {/* <p>
                           © Copyright 2025{" "}
                           <Link href="/">SAK WoodWorks. </Link> All Rights
                           Reserved
                        </p> */}
                        <p>
                           © {f("copy_right")}{" "}
                           <Link href="/" target="_blank">
                              {" "}
                              {f("company")}{" "}
                           </Link>{" "}
                           {f("all_right")}
                        </p>
                     </div>

                     <div className="footer-one__social-links">
                        <ul>
                           <li>
                              <Link
                                 href="https://www.facebook.com/Sakwwth"
                                 target="_blank"
                              >
                                 <span className="fab fa-facebook-f"></span>
                              </Link>
                           </li>

                           <li>
                              <Link
                                 href="https://www.youtube.com/@sakwoodworks"
                                 target="_blank"
                              >
                                 <span className="fab fa-youtube"></span>
                              </Link>
                           </li>

                           <li>
                              <Link
                                 href="https://www.tiktok.com/@sakwoodworks"
                                 target="_blank"
                              >
                                 <span className="fab fa-tiktok"></span>
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://www.instagram.com/sakwoodworks"
                                 target="_blank"
                              >
                                 <span className="fab fa-instagram"></span>
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://lin.ee/smwoT3j"
                                 target="_blank"
                              >
                                 <span className="fab fa-line"></span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         {/*End Footer Four*/}
      </>
   );
}
