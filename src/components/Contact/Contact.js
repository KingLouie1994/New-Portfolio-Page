import React, { useState, useContext } from "react";
import styles from "./Contact.module.css";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

const Contact = () => {
  const [display, setDisplay] = useState("none");
  const [darkMode] = useContext(DarkModeContext);

  setTimeout(() => {
    setDisplay("");
  }, 5000);

  return (
    <div
      className={darkMode ? styles.containerDark : styles.container}
      id={"contact"}
      style={{ display: `${display}` }}
    >
      <div className={styles.callToAction}>
        <h1>Contact me however you want, whenever you want!</h1>
        <h2>
          Realize the visions of your web presence or your own web application
          as soon as possible
        </h2>
      </div>
      <div className={styles.contactMe}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/luisschekerka/"
        >
          <LinkedInIcon
            style={{ fontSize: 100 }}
            className={darkMode ? styles.iconDark : styles.icon}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:luis.schekerka@gmail.com"
        >
          <MailOutlinedIcon
            style={{ fontSize: 100 }}
            className={darkMode ? styles.iconDark : styles.icon}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
