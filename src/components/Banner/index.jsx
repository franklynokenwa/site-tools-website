import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import logo from "../../../public/05.jpeg";
const Banner = ({ title, image = logo }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBackdrop}>
        <Image src={image} alt="ST & T" priority />
      </div>
      <div className={styles.bannerTextContainer}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Banner;
