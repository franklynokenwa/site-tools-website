import { Banner, Crumbs } from "@/components";
import React from "react";
import styles from "../../page.module.css";
const QAP = () => {
  return (
    <div>
      <Banner title="Our Quality Policy" />
      <div className={styles.pageContent}>
        <Crumbs
          previousURL="/"
          previous="Home"
          next="QAP"
          nextURL="/about/quality-policy#"
        />
        <div className={styles.subContent}>
          <h2>Our Quality Policy</h2>
          <p>
            Our quality and assurance plan ensures that appropriate process and
            system is practiced. This involves the provision of tools for record
            keeping activities that cover all systems of operations.
          </p>
          <p>Some of our quality assurance activities are:</p>
          <ul>
            <li>
              Planning, scheduling and appraisal of preventive maintenance
            </li>
            <li>Tracking required maintenance services</li>
            <li>Planned proactive and reactive inspections</li>
            <li>
              Inspecting, discovering, evaluating and documenting deficiencies
            </li>
            <li>Monitoring the life of equipment and facilities</li>
            <li>Developing a maintenance file</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QAP;
