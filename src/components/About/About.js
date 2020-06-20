import React from "react";
import styles from "./About.module.css";
import HTML from "../../images/HTML.png";
import CSS from "../../images/CSS.png";
import JS from "../../images/JS.png";
import ReactLogo from "../../images/ReactLogo.png";
import Node from "../../images/Node.png";
import Mongo from "../../images/MongoDB.png";
import MySQL from "../../images/MySQL.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <img src={HTML} alt="html" className={styles.logo} />
        <img src={CSS} alt="css" className={styles.logo} />
        <img src={JS} alt="javascript" className={styles.logo} />
        <img src={ReactLogo} alt="react" className={styles.logo} />
        <img src={Node} alt="node" className={styles.logo} />
        <img src={Mongo} alt="MongoDB" className={styles.logo} />
        <img src={MySQL} alt="MySQL" className={styles.logo} />
      </div>
      <p className={styles.text}>
        After graduating in civil- and environmental engineering in Hamburg I
        discovered my passion for programming. Now that I have completed Lambda
        School I started working as a freelancer in the field of web
        development. In the frontend area, I preferably work with Vanilla
        Javascript or React. Backend tasks I can best solve with Node, using
        MongoDB or MySQL as the database management system. I can combine my
        experience in founding and consulting companies and the accompanying of
        the growth of these companies with my technical know-how, to provide
        valuable input for the alignment of the company strategy and the general
        business development.
      </p>
      <div className={styles.logoDiv}>
        <img src={HTML} alt="html" className={styles.logo} />
        <img src={CSS} alt="css" className={styles.logo} />
        <img src={JS} alt="javascript" className={styles.logo} />
        <img src={ReactLogo} alt="react" className={styles.logo} />
        <img src={Node} alt="node" className={styles.logo} />
        <img src={Mongo} alt="MongoDB" className={styles.logo} />
        <img src={MySQL} alt="MySQL" className={styles.logo} />
      </div>
    </div>
  );
};

export default About;
