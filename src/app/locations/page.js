import { Banner, Crumbs } from "@/components";
import React from "react";
import van from "../../../public/slider2.jpg";
import naija from "../../../public/nigeria.png";
import eth from "../../../public/ethopia.svg";
import marker from "../../../public/marker.png";
import styles from "../page.module.css";
import Image from "next/image";

const Locations = () => {
  return (
    <div>
      <Banner title="Locations" image={van} />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next="Locations"
          nextURL="/locations#"
        />
        <div className={styles.subContent}>
          <div className={styles.imageFlex}>
            <div className={styles.imageContainer}>
              <h2>Nigeria</h2> <Image src={naija} alt="Nigeria" priority />
              <div className={styles.markerContainer}>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Abia State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Lagos State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Enugu State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Oyo State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Imo State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Rivers State
                </div>
                <div className={styles.marker}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Osun State
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <h2>Ethiopia</h2>
              <Image src={eth} alt="Ethiopia" priority />
              <div className={styles.markerContainer}>
                <div className={`${styles.marker} ${styles.large}`}>
                  <Image src={marker} alt="Ethiopia" priority />
                  Addis Ababa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
