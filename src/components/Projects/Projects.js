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
      <h2 className={styles.heading}>
        Each project has a full write up and tech stack documentation on the
        GitHub Repos!
      </h2>
      <div className={styles.cardHolder}>
        {Allprojects.map((project) => {
          return (
            <div className={styles.projectCard}>
              <div className={styles.projectName}>
                <img
                  src={`ProjectLogos/${project.name}.png`}
                  alt={`${project.name}`}
                  className={styles.logo}
                />{" "}
                <h2>{project.name}</h2>
              </div>
              <h3 className={styles.description}>{project.desciption}</h3>
              <h3 className={styles.rubric}>
                Visit the Application:
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <LanguageIcon
                    className={darkMode ? styles.iconDark : styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <h3 className={styles.rubric}>
                Frontend Repository:
                <a
                  href={project.gitHubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={darkMode ? styles.iconDark : styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <h3 className={styles.rubric}>
                Backend Repository:
                <a
                  href={project.gitHubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    className={darkMode ? styles.iconDark : styles.icon}
                    style={{ fontSize: 40 }}
                  />
                </a>
              </h3>
              <h3 className={styles.rubric}>
                Tech Stack:
                <div className={styles.techstack}>
                  {project.techStack.map((element) => {
                    return (
                      <img
                        src={`LanguageIcons/${element}.png`}
                        alt={`${element}`}
                        className={
                          darkMode ? styles.languageDark : styles.language
                        }
                      />
                    );
                  })}
                </div>
              </h3>
              <h3 className={styles.role}>{project.role}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
