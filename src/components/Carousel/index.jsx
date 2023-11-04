"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlider = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlider, 10000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlider = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {slides.map((slide, index) => (
          <div className={styles.carouselSlide} key={index}>
            {index === current && (
              <div className={styles.carouselSlider}>
                <Image
                  src={slide.image}
                  alt={slide.header}
                  className={styles.carouselImage}
                />
                <div className={styles.carouselContent}>
                  <div className={styles.half}>
                    <h1>{slide.heading}</h1>
                    <p>{slide.content}</p>
                    <div className="btnContainer">
                      <Link href="/about" className={styles.btn}>
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* <div className={styles.carouselControls}>
          <span onClick={prevSlider}>Previous</span>
          <span onClick={nextSlider}>Next</span>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
