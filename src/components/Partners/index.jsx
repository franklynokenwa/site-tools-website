"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import partner1 from "../../../public/partner1.jpg";
import partner2 from "../../../public/partner2.jpg";
import partner3 from "../../../public/partner3.jpg";
import partner4 from "../../../public/partner4.jpg";
import partner5 from "../../../public/partner5.jpg";
import partner6 from "../../../public/partner6.jpg";
import partner7 from "../../../public/partner7.jpg";
import partner8 from "../../../public/partner8.jpg";
import Image from "next/image";
// import partner9 from "../../public/partner9.jpg";
// import partner10 from "../../public/partner10.jpg";
// import partner11 from "../../public/partner11.jpg";
import styles from "./styles.module.css";

const Partners = (props) => {
  const partnerResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const partners = [
    {
      image: partner1,
    },
    {
      image: partner2,
    },
    {
      image: partner3,
    },
    {
      image: partner4,
    },
    {
      image: partner5,
    },
    {
      image: partner6,
    },
    {
      image: partner7,
    },
    {
      image: partner8,
    },
    // {
    //     image: partner9,
    // },
    // {
    //     image: partner10,
    // },
    // {
    //     image: partner11,
    // },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.title}>OUR PARTNERS</div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={partnerResponsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass={styles.flex}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass={styles.itemGap}
        arrows={false}
      >
        {partners.map((item, i) => (
          <div className={styles.content} key={i}>
            <Image src={item.image} alt="Partners" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partners;
