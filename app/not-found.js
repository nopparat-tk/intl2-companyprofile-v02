"use client";

import Layout from "@/components/layout/Layout";
import { routing } from "@/i18n/routing";
import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { notoSans, notoSansTh, notoSansSC } from "@/lib/font";
import Link from "next/link";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  const locale = routing.defaultLocale;

  const fontClass =
    locale === "th"
      ? notoSansTh.variable
      : locale === "ch"
      ? notoSansSC.variable
      : notoSans.variable;
  return (
    <html lang={locale} className={fontClass}>
      <body>
        <section className="error-page">
          <div className="container">
            <div className="error-page__inner text-center">
              <div className="error-page__img float-bob-y">
                <img
                  src="/assets/images/resources/error-page-img1.png"
                  alt=""
                />
              </div>
              <div className="btn-box">
                <Link className="thm-btn" href="/">
                  Back To Home
                  <i className="icon-right-arrow21"></i>
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </Link>
              </div>
              <div
                className="error-page__content"
                style={{ marginTop: "15px" }}
              >
                <h2>Oops! Page Not Found!</h2>
                <p>
                  The page you are looking for does not exist. It might have
                  been moved or deleted.
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
