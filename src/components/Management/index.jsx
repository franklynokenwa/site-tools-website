"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ManagementTeam = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlider = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };
  //   timeout.current = setTimeout(nextSlider, 10000);
  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

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
    <>
      {slides.map((slide, index) => (
        <div className={styles.carouselSlide} key={index}>
          {index === current && (
            <>
              <div className={styles.carouselSlider}>
                <Image
                  src={slide.image}
                  alt={slide.header}
                  className={styles.carouselImage}
                />
              </div>
              <div className={styles.carouselContent}>
                <h2>{slide.name}</h2>
                <p>{slide.role}</p>
                <p>{slide.content}</p>
              </div>
            </>
          )}
        </div>
      ))}
      <div className={styles.carouselControls}>
        <span onClick={prevSlider}>
          <FaArrowAltCircleLeft />
        </span>
        <span onClick={nextSlider}>
          <FaArrowAltCircleRight />
        </span>
      </div>
    </>
  );
};

export default ManagementTeam;
