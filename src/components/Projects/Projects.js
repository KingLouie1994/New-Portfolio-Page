import React, { useState, useContext } from "react";
import styles from "./Projects.module.css";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

import Allprojects from "./ListOfProjects";

const Projects = () => {
  const [darkMode] = useContext(DarkModeContext);
  const [display, setDisplay] = useState("none");

  setTimeout(() => {
    setDisplay("");
  }, 5000);

  return (
    <div
      className={darkMode ? styles.containerDark : styles.container}
      id={"projects"}
      style={{ display: `${display}` }}
    >
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.cardHolder}>
        {Allprojects.map((e) => {
          return (
            <div className={styles.projectCard}>
              <h2>{e.name}</h2>
              <h3 className={styles.rubric}>
                Visit the Application:
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <LanguageIcon
                    className={styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <h3 className={styles.rubric}>
                Frontend Repository:
                <a
                  href={e.gitHubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <h3 className={styles.rubric}>
                Backend Repository:
                <a
                  href={e.gitHubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`project_screenshots/${e.id}_screenshot.jpeg`}
                  alt={`${e.name}`}
                  className={styles.screenshot}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
