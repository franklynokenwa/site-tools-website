import { Banner, Crumbs } from "@/components";
import React from "react";
import styles from "../page.module.css";
import HexComponent from "@/components/About/Component";
import ManagementTeam from "@/components/Management";
import femi from "../../../public/femi.png";
import addis from "../../../public/addis.png";
import dara from "../../../public/dara.png";
import jide from "../../../public/jide.png";
import avatar from "../../../public/avatar.png";
import wale from "../../../public/wale.png";
import odejobi from "../../../public/odejobi.png";
import dele from "../../../public/dele.png";
import mered from "../../../public/mered.png";
import rash from "../../../public/rash.png";
import seun from "../../../public/seun.png";
import hr from "../../../public/hr.png";
const About = () => {
  const slides = [
    {
      image: femi,
      name: "MR FEMI OWOPETU",
      role: "Managing Director/CEO, Nigeria and Board Director, Ethiopia",
      content:
        "",
    },
    {
      image: dara,
      name: "ENGR. DARAMOLA SHERIFFDEEN",
      role: "Executive Director /COO, Nigeria and CEO and Board Director, Ethiopia",
      content:
        "",
    },
    {
      image: addis,
      name: "ADDIS ALEMAYEHOU",
      role: "Board Director of Specific Tools Ethiopia",
      content:
        "",
    },

    {
      image: jide,
      name: "OLAJIDE ADEBAYO",
      role: "General Manager (ATC), Nigeria",
      content:
        "",
    },
    {
      image: seun,
      name: "ENGR. AYANDA OLUWASEUN OMONIYI",
      role: "Senior Manager (IHS & Huawei)",
      content:
        "",
    },
    {
      image: wale,
      name: "ENGR. ADEWALE ADEJUMOBI",
      role: "General Manager (Commercial) Nigeria and Ethiopia",
      content:
        "",
    },
    {
      image: odejobi,
      name: "ODEJOBI ABIODUN RASAQ",
      role: "Active Manager, Nigeria/Ethiopia",
      content:
        "",
    },
    {
      image: dele,
      name: "DELE OGUNDARE",
      role: "GRID Manager, Nigeria",
      content:
        "",
    },
    {
      image: mered,
      name: "MERED BESRAT, CM, CIPM",
      role: "Country Manager, Ethiopia",
      content:
        "",
    },
    {
      image: rash,
      name: "RASHEED LAWAL",
      role: "Head of Fibre Infrastructure, Nigeria and Ethiopia",
      content:
        "",
    },
    // {
    //   image: hr,
    //   name: "PATIENCE LAWAL (ACIPM, CHRBP)",
    //   role: "Human Resources/Admin Manager, Nigeria and Ethiopia",
    //   content:
    //     "Patience is a professional with a dynamic passion for Human Resource Management. She is experienced in talent management, recruitment and selection, performance management, compensation and benefits, learning and development, human resources information system, HR data and analytics and HR compliance. Prior to joining ST&T, she has worked with a consulting firm and Multinational FMCG. She is an associate member of Chartered Institute of Personnel Management Nigeria, Association of Elite Human Resource Professionals, a certified HR Business Partner  and has a graduate certificate in Business Administration from Sikkim Manipal University Ghana. She has attended several courses such as Talent Management, Strategic HR in Modern Time, Gaining Mastery of HR and Data Analytics, Driving Successful Business Execution through Human Capital  etc. She recently got certified as Human Resource Business Partner from World Academy UK.",
    // },
   
  ];

  return (
    <div>
      <Banner title="About Us" />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next="About Us"
          nextURL="/about#"
        />
        <div className={styles.subContent}>
          <h2>Specfic Tools & Techniques Limited</h2>
          <p>
            Specific Tools & Techniques Ltd (ST&T) started its operations in
            2007 to provide engineering and integrated facility management
            services to optimize productivity and enabling customers to
            concentrate on their core line of businesses.
            <br />
            In 2020, ST&T expanded its operations to Addis Ababa as Specific
            Tools and Techniques Consultancy PLC to provide service in the area
            of engineering, construction and integrated facility management.
            <br />
            We partner with global suppliers of choice for innovative technology
            backed by the highest level of services and supports for customer
            satisfaction. The company customers are Telecommunications, Real
            Estate, Health Sectors, Educational Institutions, Electricity
            Distribution companies across West and East Africa.
            <br />
            The Board of Directors and the team consist of experienced and
            accredited professionals, and this places ST&T Ltd in a strategic
            position to meet all customers’ need with consideration for
            sustainable service delivery, health, safety and environment.
          </p>
        </div>
        <div className={styles.subContent}>
          <h2>Management Team</h2>
          <ManagementTeam slides={slides} />
        </div>
        <HexComponent />
      </div>
    </div>
  );
};

export default About;
