"use client";
import { Accordion, Banner, Crumbs } from "@/components";
import React from "react";
import styles from "../../page.module.css";
import style from "./styles.module.css";
import service from "../../../../public/05.jpeg";
import Image from "next/image";
import { PortfolioItems } from "@/components/helper";
import Link from "next/link";

const Portfolio = ({ params }) => {
  const pageContent = PortfolioItems?.find((x) => x.url === params?.name);
  const [accordionStates, setAccordionStates] = React.useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });

  const toggleAccordion = (accordionId) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [accordionId]: !prevState[accordionId],
    }));
  };

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
    <div>
      <Banner
        title={pageContent?.name}
        image={pageContent.banner ? pageContent.banner : service}
      />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next={pageContent?.name}
          nextURL={`/portfolio/${params.name}#`}
        />
        <div className={styles.container}>
          <h1>{pageContent.name}</h1>
          <br />
          <p dangerouslySetInnerHTML={{ __html: pageContent.text }} />
          <br />
          <br />
          <div className={style.imgContainer}>
            {pageContent.image?.map((item, i) => (
              <div className={style.imgFlex} key={i}>
                <Image src={item} alt={pageContent.name} priority />
              </div>
            ))}
          </div>
          <div className="circleSections">
            {pageContent?.sections?.map((item, i, arr) => (
              <div className="benefitItemContainer" key={i}>
                <div className="circleContainer">
                  <div className="circle"></div>
                  {i !== arr.length - 1 && <div className="circleLine"></div>}
                </div>
                <div className="benefitTextContainer">
                  <h4>{item}</h4>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <Accordion
            title="More Portfolio"
            isOpen={accordionStates.accordion1}
            toggleAccordion={() => toggleAccordion("accordion1")}
            id="accordion5"
          >
            <ul>
              {PortfolioItems?.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/portfolio/${item.url}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {toTitleCase(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
          <Accordion
            title="Other Services"
            isOpen={accordionStates.accordion2}
            toggleAccordion={() => toggleAccordion("accordion2")}
            id="accordion5"
          >
            <ul>
              <li>Design and Fabrication of Diesel Tank</li>
              <li>Diesel Generator Rentals</li>
              <li>Equipment movements</li>
              <li>Facility Audit</li>
              <li> Manpower development</li>
              <li>Facility Management Consultancy</li>
            </ul>
          </Accordion>
          <Accordion
            title="Capital Projects"
            isOpen={accordionStates.accordion3}
            toggleAccordion={() => toggleAccordion("accordion3")}
            id="accordion5"
          >
            <ul>
              <li>Amendment and Collocation</li>
              <li>Civil Upgrade/ Site Refurbishment</li>
              <li>Site Earthing Upgrade</li>
              <li>Shelter Cap Upgrade</li>
              <li>Fire Suppression</li>
              <li>Light Retrofit and AWL Installation</li>
              <li>Diesel Tank Installation</li>
              <li>Electrical Upgrade</li>
              <li>Intercity Fibre DWDM Project</li>
              <li>DG Encasement</li>
              <li>H&S Site Signage Installation</li>
              <li>Palisade Fence Installation</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
