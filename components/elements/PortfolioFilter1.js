"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let timeoutId;

    const initializeIsotope = () => {
      const container = document.querySelector(".items-container");
      if (container && !isotope.current) {
        try {
          isotope.current = new Isotope(container, {
            itemSelector: ".masonry-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".masonry-item",
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
      <div className="portfolio-three__filter-box">
        <ul className="portfolio-three__filter style1 post-filter list-unstyled clearfix">
          <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
            <span className="filter-text">All</span>
          </li>
          <li
            className={activeBtn("cat-1")}
            onClick={handleFilterKeyChange("cat-1")}
          >
            <span className="filter-text">Business Strategy</span>
          </li>
          <li
            className={activeBtn("cat-2")}
            onClick={handleFilterKeyChange("cat-2")}
          >
            <span className="filter-text">Financial</span>
          </li>
          <li
            className={activeBtn("cat-3")}
            onClick={handleFilterKeyChange("cat-3")}
          >
            <span className="filter-text">Planning</span>
          </li>
          <li
            className={activeBtn("cat-4")}
            onClick={handleFilterKeyChange("cat-4")}
          >
            <span className="filter-text">Tax Strategy</span>
          </li>
          <li
            className={activeBtn("cat-5")}
            onClick={handleFilterKeyChange("cat-5")}
          >
            <span className="filter-text">Investment</span>
          </li>
        </ul>
      </div>
      <div className="items-container row clearfix">
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-1.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Business Growth</Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-3.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Business Audit</Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-5.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Financial Advices</Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-6.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Tax Strategy</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-6.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Tax Strategy</Link>
              </h3>
            </div>
          </div>
        </div>
        {/* Case Block */}
        <div className="case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-3.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-three__content">
              <p className="portfolio-three__sub-title">Business Audit</p>
              <h3 className="portfolio-three__title">
                <Link href="portfolio-details">Our Business Audit</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
