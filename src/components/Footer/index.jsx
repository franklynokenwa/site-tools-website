import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarker,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

import logo from "../../../public/logo.png";
import { PortfolioItems } from "../helper";

const Footer = () => {
  function toTitleCase(str) {
    // Split the string into words using spaces as separators
    let words = str.split(" ");

    // Capitalize the first letter of each word and convert the rest to lowercase
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }

    // Join the words back into a single string with spaces
    return words.join(" ");
  }
  return (
    <div className={styles.footer}>
      <div className={styles.firstFlex}>
        <div className={`${styles.card} ${styles.small}`}>
          {/* <Image
            src={logo}
            alt="ST & T Logo"
            //   className={styles.vercelLogo}
            //   width={100}
            //   height={24}
            priority
          /> */}
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio">Service Portfolio</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <Link href="/about/operational-structure">
                Operational Structure
              </Link>
            </li>
            <li>
              <Link href="/about/quality-policy">Quality Policy</Link>
            </li>
            <li>
              <Link href="/about/leadership">Leadership</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.card} ${styles.small}`}>
          <h3>Portfolio</h3>
          <ul>
            {PortfolioItems?.map((item, i) => (
              <li key={i}>
                <Link href={`/portfolio/${item.url}`}>
                  {toTitleCase(item.name)}
                </Link>
              </li>
            )).slice(0, 6)}
          </ul>
        </div>
        <div className={`${styles.card} ${styles.small}`}>
          <h3>Contact Us</h3>
          <div className={styles.cardContainer}>
            <div className={styles.text}>
              <p>
                <strong>
                  <FaMapMarker /> &nbsp; Nigeria:
                </strong>
                <br />
                51b Alhaji Adekunle Bisi Street, Hill View Estate, Ogudu GRA,
                Lagos P.O BOX: 3757-IKJ <br />
                <strong>Ethiopia:</strong>
                <br /> Gabon Street, Aster Plaza, 3rd Floor, Addis Ababa.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.card} ${styles.small}`}>
          <h3>Contact Us</h3>
          <div className={`${styles.cardContainer} `}>
            <div className={styles.text}>
              <p>
                <FaEnvelope /> &nbsp;
                <Link href="mailTo:info@specifictoolsng.com">
                  info@specifictoolsng.com
                </Link>{" "}
                &nbsp;&nbsp;
                <Link href="mailTo:specifictools@yahoo.com">
                  specifictools@yahoo.com
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.text}>
              <p>
                <b>&nbsp;Nigeria: </b>
                <Link href="tel:+2348032023945">+2348032023945</Link>
                &nbsp;&nbsp;
                <Link href="tel:+2347066699190">+2347066699190</Link>
                &nbsp;&nbsp;
                <Link href="tel:+2348167148443">+2348167148443</Link>
              </p>
              <p>
                <b>Addis Ababa:</b>
                <Link href="tel:+251920722281"> +251920722281</Link>
              </p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.icon}></div>
            <div className={styles.text}>
              <p>
                {" "}
                <FaLinkedinIn />
                &nbsp; Connect with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
