"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import PhoneCall from "../../elements/PhoneCall";

export default function WhyChooseUs() {
   const t = useTranslations("HeaderBtn");
   const ca = useTranslations("ContactArea");
   const inf = useTranslations("InputForm");

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [idline, setLineID] = useState("");
   const [massege, setMassege] = useState("");
   const [submitting, setSubmitting] = useState(false);
   const [success, setSuccess] = useState(false);
   const [error, setError] = useState(null); // Add error state

   const [nameError, setNameError] = useState(null);
   const [emailError, setEmailError] = useState(null);
   const [phoneError, setPhoneError] = useState(null);
   const [idlineError, setIdlineError] = useState(null);
   const [massegeError, setMassegeError] = useState(null);

   const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
      setError(null); // Clear any previous errors

      // Check for empty fields
      let hasError = false;
      if (!name) {
         setNameError("Name is required.");
         hasError = true;
      } else {
         setNameError(null);
      }
      if (!email) {
         setEmailError("Email is required.");
         hasError = true;
      } else {
         setEmailError(null);
      }
      if (!phone) {
         setPhoneError("Phone No. is required.");
         hasError = true;
      } else {
         setPhoneError(null);
      }
      if (!idline) {
         setIdlineError("Line ID is required.");
         hasError = true;
      } else {
         setIdlineError(null);
      }
      if (!massege) {
         setMassegeError("Message is required.");
         hasError = true;
      } else {
         setMassegeError(null);
      }

      if (hasError) {
         setSubmitting(false);
         return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("idline", idline);
      formData.append("massege", massege);

      try {
         const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxvM-rtnmkhW3XpEk1HC9Vfb6cLwv_boDpDT10wImaRh-CUI3hiLWZGla4h0BMwZp9_/exec",
            {
               method: "POST",
               body: formData, // Send FormData directly
            }
         );

         if (!response.ok) {
            const errorData = await response.text(); // Get error message from server
            throw new Error(
               `HTTP error! status: ${response.status}, message: ${errorData}`
            );
         }

         setSuccess(true);
         // Clear the form after successful submission
         setName("");
         setEmail("");
         setPhone("");
         setLineID("");
         setMassege("");
      } catch (error) {
         console.error("Submission failed! Please try again.", error);
         setError(error.message); // Set the error message
         setSuccess(false); // Make sure success is false in case of error
      } finally {
         setSubmitting(false);
      }
   };
   return (
      <>
         <section className="contact-one" id="contact">
            <div className="contact-one__pattern">
               <img
                  src="assets/images/pattern/Contact-Us BG-pattern-01.png"
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
                                 {/* <h4>Contact us</h4> */}
                                 <h4>{ca("title")}</h4>
                              </div>
                              {/* <div className="icon">
                                 <span className="icon-plane2 float-bob-x3"></span>
                              </div> */}
                              <div className="line2"></div>
                           </div>
                           <h2 className="sec-title__title tg-element-title">
                              {/* We're <span>delighted </span> to{" "}
                              <span> assist </span> you */}
                              {ca("sub_title1")}{" "}
                              <span> {ca("sub_title2")} </span>{" "}
                              {ca("sub_title3")}{" "}
                              <span> {ca("sub_title4")} </span>{" "}
                              {ca("sub_title5")}
                           </h2>
                        </div>
                        <div className="contact-one__title-box">
                           {/* <h4>Sak Woodworks Co., Ltd.</h4> */}
                           <h4>{ca("header")}</h4>
                        </div>

                        <div className="contact-one__content-list">
                           <ul>
                              <li>
                                 <p>
                                    <span className="fa fa-phone"></span>
                                    {/* Mon to Sat : 08:00 - 17:00 */}
                                    {ca("sub_header1")}
                                 </p>
                                 <p>
                                    <span
                                       className="fa fa-phone"
                                       style={{ opacity: "0" }}
                                    ></span>{" "}
                                    <span className="text-box">
                                       <Link href={`tel:${t("phone_no")}`}>
                                          {t("phone_no")}
                                       </Link>
                                    </span>
                                 </p>
                              </li>

                              <li>
                                 <p>
                                    <span className="fa fa-envelope-open-text"></span>{" "}
                                    {/* Do you have a question? */}
                                    {ca("sub_header2")}
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
                                    {/* Social Networks */}
                                    {ca("sub_header3")}
                                 </p>
                                 <p>
                                    <span
                                       className="fa fa-share-alt"
                                       style={{
                                          opacity: "0",
                                       }}
                                    ></span>{" "}
                                    <span
                                       className="social-list"
                                       style={{
                                          paddingLeft: "0.06em",
                                       }}
                                    >
                                       <Link
                                          className="fab fa-facebook-square"
                                          href="https://www.facebook.com/Sakwwth"
                                          target="_blank"
                                       ></Link>
                                       <Link
                                          className="fab fa-youtube"
                                          href="https://www.youtube.com/@sakwoodworks"
                                          target="_blank"
                                       ></Link>
                                       <Link
                                          className="fab fa-tiktok"
                                          href="https://www.tiktok.com/@sakwoodworks"
                                          target="_blank"
                                       ></Link>
                                       <Link
                                          className="fab fa-instagram"
                                          href="https://www.instagram.com/sakwoodworks"
                                          target="_blank"
                                       ></Link>
                                       <Link
                                          className="fab fa-line"
                                          href="https://lin.ee/smwoT3j"
                                          target="_blank"
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
                           {/* <h2>Send us a message </h2>
                           <p>we'll get back to you ASAP!</p> */}
                           <h2> {inf("title")} </h2>
                           <p> {inf("desc")} </p>
                        </div>

                        <form
                           className="contact-form-validated why-choose-one__form"
                           onSubmit={handleSubmit}
                        >
                           <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       // name="name"
                                       placeholder={`${inf("name")}`}
                                       value={name}
                                       onChange={(event) =>
                                          setName(event.target.value)
                                       }
                                       required=""
                                    />
                                    <div className="icon">
                                       <span className="icon-user"></span>
                                    </div>
                                 </div>
                                 {nameError && (
                                    <p className="error-message">{nameError}</p>
                                 )}
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                                 <div className="input-box">
                                    <input
                                       type="email"
                                       // name="email"
                                       placeholder={`${inf("email")}`}
                                       required=""
                                       value={email}
                                       onChange={(event) =>
                                          setEmail(event.target.value)
                                       }
                                    />
                                    <div className="icon">
                                       <span className="icon-email"></span>
                                    </div>
                                 </div>
                                 {emailError && (
                                    <p className="error-message">
                                       {emailError}
                                    </p>
                                 )}
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       // name="Phone"
                                       placeholder={`${inf("phone")}`}
                                       required=""
                                       value={phone}
                                       onChange={(event) =>
                                          setPhone(event.target.value)
                                       }
                                    />
                                    <div className="icon">
                                       <span className="icon-phone2"></span>
                                    </div>
                                 </div>
                                 {phoneError && (
                                    <p className="error-message">
                                       {phoneError}
                                    </p>
                                 )}
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                 <div className="input-box">
                                    <input
                                       type="text"
                                       // name="LineID"
                                       placeholder={`${inf("idline")}`}
                                       required=""
                                       value={idline}
                                       onChange={(event) =>
                                          setLineID(event.target.value)
                                       }
                                    />
                                    <div className="icon">
                                       <span className="fab fa-line"></span>
                                    </div>
                                 </div>
                                 {idlineError && (
                                    <p className="error-message">
                                       {idlineError}
                                    </p>
                                 )}
                              </div>

                              <div className="col-xl-12 mb-3">
                                 <div className="input-box">
                                    <textarea
                                       // name="message"
                                       placeholder={`${inf("massege")}`}
                                       value={massege}
                                       onChange={(event) =>
                                          setMassege(event.target.value)
                                       }
                                    ></textarea>
                                    <div className="icon style2">
                                       <span className="icon-pen"></span>
                                    </div>
                                 </div>
                                 {massegeError && (
                                    <p className="error-message">
                                       {massegeError}
                                    </p>
                                 )}
                              </div>

                              <div className="col-xl-12">
                                 <div className="why-choose-one__form-btn">
                                    <button
                                       type="submit"
                                       className="thm-btn"
                                       disabled={submitting}
                                    >
                                       {submitting
                                          ? "Submitting..."
                                          : `${inf("submit")}`}
                                       <i className="icon-right-arrow21"></i>
                                       <span className="hover-btn hover-bx"></span>
                                       <span className="hover-btn hover-bx2"></span>
                                       <span className="hover-btn hover-bx3"></span>
                                       <span className="hover-btn hover-bx4"></span>
                                    </button>
                                    {success && (
                                       <p style={{ color: "green" }}>
                                          {inf("success")}
                                       </p>
                                    )}
                                    {error && (
                                       <p className="error-message">
                                          {inf("error")}
                                       </p>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  {/*End Why Choose One Form*/}
               </div>
            </div>
         </section>
      </>
   );
}
