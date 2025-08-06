"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ContactFormWithGclid() {
  const t = useTranslations("HeaderBtn");
  const ca = useTranslations("ContactArea");
  const inf = useTranslations("InputForm");

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  // Consolidated state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    idline: "",
    massege: "",
    gclid: "",
  });

  // Consolidated state for errors
  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Get search params from URL
  const searchParams = useSearchParams();

  // Effect to capture gclid from URL when the component loads
  useEffect(() => {
    const gclidFromUrl = searchParams.get("gclid");
    if (gclidFromUrl) {
      // Set gclid in our form data state
      setFormData((prev) => ({ ...prev, gclid: gclidFromUrl }));
    }
  }, [searchParams]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone No. is required.";
    if (!formData.idline) newErrors.idline = "Line ID is required.";
    if (!formData.massege) newErrors.massege = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    const dataToSubmit = new FormData();
    // Append all keys from our state object
    for (const key in formData) {
      dataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxvM-rtnmkhW3XpEk1HC9Vfb6cLwv_boDpDT10wImaRh-CUI3hiLWZGla4h0BMwZp9_/exec",
        {
          method: "POST",
          body: dataToSubmit,
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        idline: "",
        massege: "",
        gclid: formData.gclid, // Keep gclid for potential resubmission
      });
      setErrors({});
    } catch (error) {
      console.error("Submission failed! Please try again.", error);
      setSubmitError(error.message);
      setSuccess(false);
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
          <img src="assets/images/shapes/why-choose-v1-shape1.png" alt="" />
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
                    {ca("sub_title1")} <span> {ca("sub_title2")} </span>{" "}
                    {ca("sub_title3")} <span> {ca("sub_title4")} </span>{" "}
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
                          {/* <Link href={`tel:${t("phone_no")}`}>
                             {t("phone_no")}
                           </Link> */}
                          {showPhoneNumber ? (
                            <Link href={`tel:${t("phone_no")}`}>
                              {t("phone_no")}
                            </Link>
                          ) : (
                            <a
                              className="btn-box"
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={togglePhoneNumber}
                            >
                              {t("phone_no").slice(0, 7)} ****
                            </a>
                          )}
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
                  {/* Add this hidden input field for gclid */}
                  <input
                    type="hidden"
                    name="gclidForm"
                    value={formData.gclid}
                  />
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                      <div className="input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={`${inf("name")}`}
                          value={formData.name}
                          onChange={handleChange}
                          required=""
                        />
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>
                      </div>
                      {errors.name && (
                        <p className="error-message">{errors.name}</p>
                      )}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder={`${inf("email")}`}
                          required=""
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <div className="icon">
                          <span className="icon-email"></span>
                        </div>
                      </div>
                      {errors.email && (
                        <p className="error-message">{errors.email}</p>
                      )}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-4">
                      <div className="input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder={`${inf("phone")}`}
                          required=""
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <div className="icon">
                          <span className="icon-phone2"></span>
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="error-message">{errors.phone}</p>
                      )}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                      <div className="input-box">
                        <input
                          type="text"
                          name="idline"
                          placeholder={`${inf("idline")}`}
                          required=""
                          value={formData.idline}
                          onChange={handleChange}
                        />
                        <div className="icon">
                          <span className="fab fa-line"></span>
                        </div>
                      </div>
                      {errors.idline && (
                        <p className="error-message">{errors.idline}</p>
                      )}
                    </div>

                    <div className="col-xl-12 mb-3">
                      <div className="input-box">
                        <textarea
                          name="massege"
                          placeholder={`${inf("massege")}`}
                          value={formData.massege}
                          onChange={handleChange}
                        ></textarea>
                        <div className="icon style2">
                          <span className="icon-pen"></span>
                        </div>
                      </div>
                      {errors.massege && (
                        <p className="error-message">{errors.massege}</p>
                      )}
                    </div>

                    <div className="col-xl-12">
                      <div className="why-choose-one__form-btn">
                        <button
                          type="submit"
                          className="thm-btn"
                          disabled={submitting}
                        >
                          {submitting ? "Submitting..." : `${inf("submit")}`}
                          <i className="icon-right-arrow21"></i>
                          <span className="hover-btn hover-bx"></span>
                          <span className="hover-btn hover-bx2"></span>
                          <span className="hover-btn hover-bx3"></span>
                          <span className="hover-btn hover-bx4"></span>
                        </button>
                        {success && (
                          <p style={{ color: "green" }}>{inf("success")}</p>
                        )}
                        {submitError && (
                          <p className="error-message">{inf("error")}</p>
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
