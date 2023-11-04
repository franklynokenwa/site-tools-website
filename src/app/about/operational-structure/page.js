import { Banner, Crumbs } from "@/components";
import React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import org from "../../../../public/org2.JPG";
const OPS = () => {
  return (
    <div>
      <Banner title="Operational Structure" />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next="Operational Structure"
          nextURL="/about/quality-policy#"
        />
        <div className={styles.subContent}>
          <h2>Operational Structure</h2>
          <p>
            The operations of the company are coordinated on both regional and
            national levels. The national activities are coordinated through the
            Head Office/Secretariat located in Lagos and Addis Ababa.
          </p>
          <p>The regional affairs cuts across the following cities:</p>
          <ul>
            <li>Addis Ababa</li>
            <li>Port Harcourt</li>
            <li>Owerri</li>
            <li>Enugu</li>
            <li>Lagos</li>
            <li>Ibadan</li>
            <li>Akwa Ibom</li>
            <li>Osun</li>
          </ul>

          {/* <Image src={org} alt="ST & T" priority /> */}
        </div>
      </div>
    </div>
  );
};

export default OPS;
