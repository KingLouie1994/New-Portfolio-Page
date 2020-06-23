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
              src={`LanguageIcons/${language}.png`}
              alt="html"
              className={styles.logo}
            />
          );
        })}
      </div>
      <div className={styles.textDiv}>
        <h1 className={styles.welcome}>
          Hey, I'm Luis! <br />
          Welcome to my Portfolio Page
        </h1>
        <p className={styles.text}>
          Even as a child I spent most of my free time playing around with
          computers. Time flew by as soon as I sat down at a keyboard, whether I
          was playing or tinkering with something. This is still the case today,
          and my job as a web developer gives me the chance to live this passion
          every day. <br />
          <br />I started programming 3 years ago. After a three month
          beginner's course at Udemy, I expanded and improved my skills for one
          and a half years through various providers on the Internet. Then I
          discovered{" "}
          <a
            href="https://lambdaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.lambdaLink}
          >
            Lambda School
          </a>
          . For nine months I took a full-time course in Full Stack Web
          Development to be able to develop front- and backend of a web
          application. <br />
          <br /> Now I offer my services as a developer. My strengths lie in Web
          applications built in Vanilla JavaScript or React for the frontend.
          For the backend I prefer Node.js with Express to build it and MongoDB
          or MySQL as database management system. Depending on the size of the
          project I work alone or in a team that you can provide as a customer
          or I can put together for you. If you're interested in a first meeting
          or a call, just scroll to the contact section!
        </p>
        <h2>
          You want to know more about me?{" "}
          <a
            className={styles.resume}
            target="_blank"
            rel="noopener noreferrer"
            href={Resume}
          >
            here
          </a>
          is my resume!
        </h2>
      </div>
      <div className={styles.logoDiv}>
        {skills.map((language) => {
          return (
            <img
              src={`LanguageIcons/${language}.png`}
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
