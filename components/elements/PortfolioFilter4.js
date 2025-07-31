"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter4() {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let timeoutId;

    const initializeIsotope = () => {
      const container = document.querySelector(".isotope-block");
      if (container && !isotope.current) {
        try {
          isotope.current = new Isotope(container, {
            itemSelector: ".project-block-six",
            percentPosition: true,
            masonry: {
              columnWidth: ".project-block-six",
            },
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: false,
            },
          });
          setIsInitialized(true);
        } catch (error) {
          console.warn("Isotope initialization failed:", error);
        }
      }
    };

    // Wait for DOM to be ready
    timeoutId = setTimeout(initializeIsotope, 1000);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (isotope.current) {
        try {
          isotope.current.destroy();
        } catch (error) {
          console.warn("Isotope cleanup failed:", error);
        }
        isotope.current = null;
        setIsInitialized(false);
      }
    };
  }, []);

  useEffect(() => {
    if (isotope.current && isInitialized) {
      try {
        filterKey === "*"
          ? isotope.current.arrange({ filter: `*` })
          : isotope.current.arrange({ filter: `.${filterKey}` });
      } catch (error) {
        console.warn("Isotope filter failed:", error);
      }
    }
  }, [filterKey, isInitialized]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) =>
    value === filterKey ? "filter active" : "filter";

  return (
    <>
      <div className="row isotope-block">
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-1.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Marketing</h5>
              <h4>Leadership</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-2.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Financial</h5>
              <h4>Responsibility</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-3.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Technical</h5>
              <h4>Engineering</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-4.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Coaching</h5>
              <h4>Manufacturer</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-5.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Business</h5>
              <h4>Management</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-6.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Marketing</h5>
              <h4>Data Analytics</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-7.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Technical</h5>
              <h4>Reservations</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-8.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Marketing</h5>
              <h4>Inventory</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-9.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Financial</h5>
              <h4>Innovative</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-10.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Technical</h5>
              <h4>Supply Chain</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-11.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Marketing</h5>
              <h4>Expansion</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 project-block-six">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-6-12.jpg" alt="" />
            </div>
            <div className="content-box">
              <h5>Financial</h5>
              <h4>Remote Support</h4>
            </div>
            <div className="link-btn">
              <Link href="#">
                <i className="flaticon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
