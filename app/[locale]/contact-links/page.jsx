import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function ContactLinks() {
  const t = useTranslations("ContactLink");
  const ca = useTranslations("ContactArea");
  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        <section className="service-one" id="service">
          <div
            className="service-one__pattern"
            style={{
              backgroundImage:
                "url(/assets/images/pattern/service-v1-pattern.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="sec-title center text-center tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>{ca("title")}</h4>
                  </div>
                  {/* <div className="icon">
                        <span className="icon-check float-bob-x3"></span>
                     </div> */}
                  <div className="line2"></div>
                </div>

                <h2 className="sec-title__title tg-element-title">
                  {ca("sub_title1")} <span> {ca("sub_title2")} </span>{" "}
                  {ca("sub_title3")} <span> {ca("sub_title4")} </span>{" "}
                  {ca("sub_title5")}
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-7">
                {/* <div className="about-three__content-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                  </p>
                </div> */}

                <div className="about-three__content-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <Link href="https://www.facebook.com/Sakwwth">
                          <span className="fab fa-facebook"></span>
                        </Link>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("facebook")}</h2>
                        <span style={{ color: "#325ae1" }}>
                          <Link href="https://www.facebook.com/Sakwwth">
                            https://www.facebook.com/Sakwwth
                          </Link>
                        </span>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <Link href="https://line.me/ti/p/uH-J-wwuZG">
                          <span className="fab fa-line"></span>
                        </Link>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("line")}</h2>
                        <span style={{ color: "#325ae1" }}>
                          <Link href="https://line.me/ti/p/uH-J-wwuZG">
                            https://line.me/ti/p/uH-J-wwuZG
                          </Link>
                        </span>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <Link href="wa.me/+66649848029">
                          <span className="fab fa-whatsapp"></span>
                        </Link>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("whatsapp")}</h2>
                        <span style={{ color: "#325ae1" }}>
                          <Link href="wa.me/+66649848029">
                            wa.me/+66649848029
                          </Link>
                        </span>{" "}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <Link href="https://t.me/SuphaluckS">
                          <span className="fab fa-telegram"></span>
                        </Link>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("telegrams")}</h2>
                        <span style={{ color: "#325ae1" }}>
                          <Link href="https://t.me/SuphaluckS">
                            https://t.me/SuphaluckS
                          </Link>
                        </span>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="fab fa-weixin"></span>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("weixin")}</h2>
                        <a style={{ fontWeight: "bold" }}>Search ID:</a>{" "}
                        wxid_sn3eaj27t8xe22
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span>
                          <img src="/assets/images/icon/zalo.svg" alt="" />
                        </span>
                      </div>

                      <div className="content-box">
                        <h2 className="text-link">{t("zalo")}</h2>
                        <a style={{ fontWeight: "bold" }}>Search ID:</a>{" "}
                        +66808566513
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
