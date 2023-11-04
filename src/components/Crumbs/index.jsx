import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
const Crumbs = ({ previousURL, previous, nextURL, next }) => {
  return (
    <div className={styles.crumbs}>
      <Link href={previousURL}>{previous}</Link>
      {">"}&nbsp;&nbsp;
      <Link href={nextURL}>{next}</Link>
    </div>
  );
};

export default Crumbs;
