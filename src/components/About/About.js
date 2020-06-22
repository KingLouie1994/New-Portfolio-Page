import React, { useContext } from "react";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import styles from "./About.module.css";
import skills from "./technicalSkills";
import Resume from "../../CV/resume.pdf";

const About = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? styles.containerDark : styles.container}
      id={"about"}
    >
      <div className={styles.logoDiv}>
        {skills.map((language) => {
          return (
            <img
              src={`Logos/${language}.png`}
              alt="html"
              className={styles.logo}
            />
          );
        })}
      </div>
      <div className={styles.textDiv}>
        <p className={styles.text}>
          After graduating in civil- and environmental engineering in Hamburg I
          discovered my passion for programming. Now that I have completed
          Lambda School I started working as a freelancer in the field of web
          development. In the frontend area, I preferably work with Vanilla
          Javascript or React. Backend tasks I can best solve with Node, using
          MongoDB or MySQL as the database management system. I can combine my
          experience in founding and consulting companies and the accompanying
          of the growth of these companies with my technical know-how, to
          provide valuable input for the alignment of the company strategy and
          the general business development.
        </p>
        <h2>
          To learn more about me, click{" "}
          <a
            className={styles.resume}
            target="_blank"
            rel="noopener noreferrer"
            href={Resume}
          >
            here
          </a>
          , for my resume
        </h2>
      </div>
      <div className={styles.logoDiv}>
        {skills.map((language) => {
          return (
            <img
              src={`Logos/${language}.png`}
              alt="html"
              className={styles.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
