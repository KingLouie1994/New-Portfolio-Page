import React, { useState, useContext } from "react";
import styles from "./Copyright.module.css";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Copyright = () => {
  const [darkMode] = useContext(DarkModeContext);
  const [display, setDisplay] = useState("none");

  setTimeout(() => {
    setDisplay("");
  }, 5000);

  return (
    <div
      className={darkMode ? styles.containerDark : styles.container}
      style={{ display: `${display}` }}
    >
      <div className={styles.copyright}>
        <CopyrightIcon fontSize={"small"} />
        <p className={styles.name}>Luis Schekerka Consulting 2020</p>
      </div>
    </div>
  );
};

export default Copyright;
