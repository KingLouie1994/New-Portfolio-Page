import React, { useContext } from "react";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import styles from "./About.module.css";
import HTML from "../../images/HTML.png";
import CSS from "../../images/CSS.png";
import JS from "../../images/JS.png";
import ReactLogo from "../../images/ReactLogo.png";
import Node from "../../images/Node.png";
import Mongo from "../../images/MongoDB.png";
import MySQL from "../../images/MySQL.png";
import Python from "../../images/Python.png";
import Resume from "../../CV/resume.pdf";

const About = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div className={darkMode ? styles.containerDark : styles.container}>
      <div className={styles.logoDiv}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/html/"
        >
          <img src={HTML} alt="html" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/css/"
        >
          <img src={CSS} alt="css" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/javascript/"
        >
          <img src={JS} alt="javascript" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/getting-started.html"
        >
          <img src={ReactLogo} alt="react" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodejs.org/en/docs/"
        >
          <img src={Node} alt="node" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.mongodb.com/"
        >
          <img src={Mongo} alt="MongoDB" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.mysql.com/doc/"
        >
          <img src={MySQL} alt="MySQL" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.python.org/3/"
        >
          <img src={Python} alt="Python" className={styles.logo} />
        </a>
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/html/"
        >
          <img src={HTML} alt="html" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/css/"
        >
          <img src={CSS} alt="css" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://devdocs.io/javascript/"
        >
          <img src={JS} alt="javascript" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/getting-started.html"
        >
          <img src={ReactLogo} alt="react" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodejs.org/en/docs/"
        >
          <img src={Node} alt="node" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.mongodb.com/"
        >
          <img src={Mongo} alt="MongoDB" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.mysql.com/doc/"
        >
          <img src={MySQL} alt="MySQL" className={styles.logo} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.python.org/3/"
        >
          <img src={Python} alt="Python" className={styles.logo} />
        </a>
      </div>
    </div>
  );
};

export default About;
