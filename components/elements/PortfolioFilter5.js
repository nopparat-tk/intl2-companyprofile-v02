"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter5() {
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
            itemSelector: ".project-block-three",
            percentPosition: true,
            masonry: {
              columnWidth: ".project-block-three",
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
        <div className="project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3-1.jpg" alt="" />
            </div>
            <div className="overlay-content">
              <div className="content">
                <div className="category">Technical</div>
                <div className="text">Market Expansion</div>
              </div>
              <div className="link-btn">
                <Link href="#" className="theme-btn">
                  <span className="flaticon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3-2.jpg" alt="" />
            </div>
            <div className="overlay-content">
              <div className="content">
                <div className="category">Technical</div>
                <div className="text">Market Expansion</div>
              </div>
              <div className="link-btn">
                <Link href="#" className="theme-btn">
                  <span className="flaticon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3-3.jpg" alt="" />
            </div>
            <div className="overlay-content">
              <div className="content">
                <div className="category">Technical</div>
                <div className="text">Market Expansion</div>
              </div>
              <div className="link-btn">
                <Link href="#" className="theme-btn">
                  <span className="flaticon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3-4.jpg" alt="" />
            </div>
            <div className="overlay-content">
              <div className="content">
                <div className="category">Technical</div>
                <div className="text">Market Expansion</div>
              </div>
              <div className="link-btn">
                <Link href="#" className="theme-btn">
                  <span className="flaticon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image">
              <img src="/assets/images/gallery/gallery-3-5.jpg" alt="" />
            </div>
            <div className="overlay-content">
              <div className="content">
                <div className="category">Technical</div>
                <div className="text">Market Expansion</div>
              </div>
              <div className="link-btn">
                <Link href="#" className="theme-btn">
                  <span className="flaticon-right-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-seven project-block-three col-lg-3 col-md-6">
          <div className="inner-box">
            <h2>1.6k </h2>
            <h4>projects Completed</h4>
            <Link href="#" className="read-more-link">
              View All Projects <i className="fa fa-caret-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
