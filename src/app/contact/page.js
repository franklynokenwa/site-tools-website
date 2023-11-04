"use client";
import { Banner, Crumbs } from "@/components";
import React, { useState } from "react";
import styles from "../page.module.css";
import contact from "../../../public/contact.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarker,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <Banner title="Contact Us" image={contact} />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next="Contact Us"
          nextURL="/contact#"
        />
        <div className={styles.subContent}>
          <div className={styles.contactFlex}>
            <div className={styles.contactBox}>Get in touch With us</div>
            <div className={styles.contactForm}>
              <div className={styles.InputContainer}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.InputContainer}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.InputContainer}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className={styles.InputContainer}>
                <label>Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="8"
                ></textarea>
              </div>

              <div className={styles.InputContainer}>
                <div className="btnContainer">
                  <button type="submit" className="btn btnRed">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactContainer}>
            {/* one */}
            <div className={styles.contactList}>
              <div className={styles.icon}>
                <FaMapMarker />
              </div>
              <div className={styles.text}>
                <p>
                  <strong>Nigeria:</strong> 51b Alhaji Adekunle Bisi Street,
                  Hill View Estate, Ogudu GRA, Lagos P.O BOX: 3757-IKJ
                </p>
                <p>
                  <strong>Ethiopia:</strong> Gabon Street, Aster Plaza, 3rd
                  Floor, Addis Ababa.
                </p>
              </div>
            </div>
            {/* one */}
            {/* one */}
            <div className={styles.contactList}>
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <div className={styles.text}>
                <Link href="mailTo:info@specifictoolsng.com">
                  info@specifictoolsng.com
                </Link>
                <Link href="mailTo:specifictools@yahoo.com">
                  specifictools@yahoo.com
                </Link>
              </div>
            </div>
            {/* one */}
            {/* one */}
            <div className={styles.contactList}>
              <div className={styles.icon}>
                <FaPhoneAlt />
              </div>
              <div className={styles.text}>
                <p>
                  <b>Nigeria:</b>
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
            {/* one */}
            {/* one */}
            <div className={styles.contactList}>
              <div className={styles.icon}>
                <a href="https://www.linkedin.com/">
                  <FaLinkedinIn />
                </a>
                &nbsp;&nbsp;{" "}
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                &nbsp;&nbsp;{" "}
                <a href="https://www.facebook.com/">
                  <FaInstagram />
                </a>
              </div>
              <div className={styles.text}>
                <p>Connect with us</p>
              </div>
            </div>
            {/* one */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
