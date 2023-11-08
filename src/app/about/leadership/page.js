import { Banner, Crumbs } from "@/components";
import React from "react";
import styles from "../../page.module.css";
import HexComponent from "@/components/About/Component";
import ManagementTeam from "@/components/Management";
import femi from "../../../../public/femi.png";
import addis from "../../../../public/addis.png";
import dara from "../../../../public/dara.png";
import jide from "../../../../public/jide.png";
import avatar from "../../../../public/avatar.png";
import wale from "../../../../public/wale.png";
import odejobi from "../../../../public/odejobi.png";
import dele from "../../../../public/dele.png";
import mered from "../../../../public/mered.png";
import rash from "../../../../public/rash.png";
import hr from "../../../../public/hr.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  const slides = [
    {
      id: 1,
      image: femi,
      name: "MR FEMI OWOPETU",
      role: "Managing Director/CEO, Nigeria and Board Director, Ethiopia",
      content:
        "Femi Owopetu is a fellow of the Institute of Chartered Accountants of Nigeria. He holds his first degree in Economics, from Ondo State University. He has worked in various blue chip organizations in leadership capacity, where he carved a niche for himself.His passion and sterling performance in the telecom industry led to his becoming the Managing Director of ST & T. In a bid to remaining relevant in the Telecom industry, he attended several local and international courses and seminar in Project Maintenance Management and Information Technology. He is an OMP graduate from Lagos Business School (PAN African University)/ Strathmore Business School, Kenya. In addition, he is a member of International Facility Management Professional, Houston, USA and Institute of Directors, Nigeria.",
    },
    {
      id: 2,
      image: dara,
      name: "ENGR. DARAMOLA SHERIFFDEEN",
      role: "Executive Director /COO, Nigeria and CEO and Board Director, Ethiopia",
      content:
        "Engr. Daramola S.A obtained a B.Engr. Degree in Mechanical/Production Engineering from Abubakar Tafawa Balewa University, Bauchi and PGD in Management from Lagos State University, Ojo. He is an OMP graduate from Lagos Business School (PAN African University) and Strathmore Business School, Kenya. He has over 19 years experience in Facility Management, Electricity Power Generation and Distribution, Real Estate and Engineering Consultancy in Health Sector. He has worked with Bayelsa State Electricity Board, Stallion Property and Development Limited, Amalgamated Estates Limited and Family Health International respectively. His specialties include generation and distribution of electricity power with Gas Turbines, maintenance and management of engineering equipment, Integrated Facility Management of Telecommunications, Infrastructure and Building Systems, Re-design of Public Health Care Facility to comply with workplace. Daramola Sheriffdeen is a registered member of COREN, Nigerian Society of Engineers, a member of International Facility Management Professional, Houston, USA and Institute of Directors, Nigeria.",
    },
    {
      id: 3,
      image: addis,
      name: "ADDIS ALEMAYEHOU",
      role: "Board Director of Specific Tools Ethiopia",
      content:
        "Addis has become a household name in Africa’s entrepreneurship landscape with Ethiopia as the genesis of his successful business career. He is the Board of Director at Specific Tools & Techniques. He is also the founder and CEO of the renowned 251 Communications, and a co-founder of KANA TV and Arada Mobile. He is a Senior Advisor at Albright Stonebridge Group, and previously served as Chief of Party of the VEGA Ethiopia AGOA+ project under USAID. Addis is an investor of over 13 companies, involved in diverse sectors under his own holding entity named Kazana Group. He is also a co-founder of the Addis Ababa Angel Network, and an advisor to the Ethiopian government on start-up policy. Addis serves on the board of the African Leadership Network, Dangote Ethiopia, the Ethiopian American Business Forum, and the ICT-ET (a private sector ICT association in Ethiopia).",
    },

    {
      id: 4,
      image: jide,
      name: "OLAJIDE ADEBAYO",
      role: "General Manager (ATC), Nigeria",
      content:
        "Olajide Adebayo is a graduate of Electrical/ Telecommunications Engineering from Federal Polytechnic Offa, Kwara State and a chartered member of Nigeria Institute of Management. He has a wealth of experience and an in-depth knowledge in site management inclusive of Technical and Administrative aspects. He was a project manager at NTS Nigeria until his appointment with ST&T as a Project Manager. In addition, he has attended trainings such as Project Management Professional (Phillips Consulting Ltd.) and certification in Strategic Project Management.",
    },
    {
      id: 6,
      image: wale,
      name: "ENGR. ADEWALE ADEJUMOBI",
      role: "General Manager (Commercial) Nigeria and Ethiopia",
      content:
        "Engr. Adewale Adejumobi joined ST&T as a Project Assistant. He obtained HND in Civil/ Structural Engineering from the Lagos state Polytechnic and PGD in Civil Engineering from Federal University of Technology, Akure. He is experienced in Civil Engineering Design and Construction, Project Management, Contract Management, cost management and Portfolio Management. He has managed different kind of projects ranging from design of structure, building construction, tower constructions, renovation/remediation works, and various engineering projects. He has attended trainings on Structural Design Software, Project Management, Budgeting, Forecasting and Control, accounting and finance for non-finance manager and HSE. He is a certified Project Manager, Lead Auditor QMS ISO 9001:2015 and a registered member of the Council for the Regulation of Engineering in Nigeria (COREN).",
    },
    {
      id: 7,
      image: odejobi,
      name: "ODEJOBI ABIODUN RASAQ",
      role: "Active Manager, Nigeria/Ethiopia",
      content:
        "Odejobi Abiodun Rasaq is graduate of Lagos State Polytechnic, where he studied Computer Science. He is an experienced Telecoms Engineer with over 10 years experience. He has worked in some multinational companies such as V-mobile, Airtel and Ericsson Nigeria and other notable companies both in Nigeria and abroad. He has undergone trainings in Project Management, Telecoms Equipment amongst others.",
    },
    {
      id: 8,
      image: dele,
      name: "DELE OGUNDARE",
      role: "GRID Manager, Nigeria",
      content:
        "Dele Ogundare joined ST&T in 2010 as the Engineering Technical Manger. Until his appointment, he was the project officer at Stag Engineering Ltd. For nine years. Dele Ogundare is a HND graduate from Federal Polytechnic, Ado Ekiti, Ekiti state. His vast experience covers equipment management and maintenance, equipment troubleshooting and simulation, assembling and maintenance of Audio Transfer Switch (ATS) and Synchronizing panels, Installation and maintenance of Transformers substation and Diesel Generating set. He has attended trainings at local and international level on both mechanical and electrical machines and auxiliaries, switches and control.",
    },
    {
      id: 9,
      image: mered,
      name: "MERED BESRAT, CM, CIPM",
      role: "Country Manager, Ethiopia",
      content:
        "Mered is the Country Manager at Specific Tools & Techniques. He is also a Founding Partner at Pragma Investment Advisory and Pragma Technologies. Prior to Pragma, he was a Project Manager for a USD 50 million project in a glass bottle manufacturing company in Ethiopia. He has also worked as country representative of an Australian company engaged in the production of LED lights. Moreover, Mered served at the Ethiopian Ministry of Foreign Affairs as a Business Diplomacy expert by representing the Ministry in the arrangement of investment and trade relations. He sits on the board of Kazana Group and holds a B.A Degree in Business Administration from Lincoln University (California), a B.A Degree in Governance and Developmental Studies from Jimma University, and a B.A. in Global Studies and International Relations from New Generation University.",
    },
    {
      id: 10,
      image: rash,
      name: "RASHEED LAWAL",
      role: "Head of Fibre Infrastructure, Nigeria and Ethiopia",
      content:
        "A graduate of Electrical/Electronics Engineering from Abubakar Tafawa Balewa Bauchi He has 15+years combination of Managed Services Projects, Mobile Technologies, Fibre Optics implementation, FTTH deployment, microwave installation and commissioning, 3G and 4G LTE installation, Hybrid site installation, Power Systems, Telecoms Civil works, construction supervision, Contract negotiation, SLA’s GSM start-ups, replacements and expansions, Sales Engineering, Telecoms Logistics, Organization design & build, Process Design, Training & Implementation. Knowledge of Huawei, Ericsson and Siemens and ZTE equipment.",
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
          next="Leadership"
          nextURL="/about/leadership#"
        />
        <div className={styles.subContent}>
          <h2>Leadership</h2>
          <p>
            Our executives combine strong management skills with a proven track
            record in the communications industry and specialist market insight.
            The Executive Management Committee and Board of Directors are shown
            below.{" "}
          </p>
        </div>
        <div className={styles.team}>
          <div className={styles.teamFlex}>
            {slides?.map((item, i) => (
              <Link
                href={`/about/leadership/${item.id}`}
                className={styles.teamCard}
                key={i}
              >
                <div className={styles.teamImg}>
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={styles.carouselImage}
                  />
                </div>
                <div className={styles.teamText}>
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                  {/* <p>{item.content}</p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
