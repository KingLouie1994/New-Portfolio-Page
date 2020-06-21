import React, { useState, useContext } from "react";
import styles from "./Projects.module.css";
import { DarkModeContext } from "../Darkmode/darkModeContext";

const Projects = () => {
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
      <p>Projects</p>
    </div>
  );
};

export default Projects;
