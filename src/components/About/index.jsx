import React from "react";
import styles from "./styles.module.css";
const AboutComponent = ({ title }) => {
  return (
    <div>
      <div className={styles.hexagon}>
        {title}
        <div className={styles.face1}></div>
        <div className={styles.face2}></div>
      </div>
    </div>
  );
};

export default AboutComponent;
