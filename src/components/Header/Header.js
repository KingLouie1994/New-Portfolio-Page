import React, { useContext } from "react";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import styles from "./Header.module.css";
import Portrait from "../../images/Portrait.jpeg";

const Header = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameAndImage}>
        <div className={styles.portraitContainer}>
          <img src={Portrait} alt={"Portrait"} className={styles.portrait} />
        </div>
        <div>
          <h1>Luis Schekerka</h1>
        </div>
      </div>
      <div className={styles.navigation}>
        <nav>
          <a href="#lol" className={styles.navElement}>
            About
          </a>
          <a href="#lol" className={styles.navElement}>
            Projects
          </a>
          <a href="#lol" className={styles.navElement}>
            Contact
          </a>
          <a href="#lol" className={styles.navElement}>
            Social Media
          </a>
          {darkMode ? (
          <a href="#lol" onClick={toggleDarkMode} className={styles.navElement}>Dark</a>
        ) : (
          <a href="#lol" onClick={toggleDarkMode} className={styles.navElement}>Not dark</a>
        )}
        </nav>
        {/* {darkMode ? (
          <p onClick={toggleDarkMode}>Dark</p>
        ) : (
          <p onClick={toggleDarkMode}>Not dark</p>
        )} */}
      </div>
    </div>
  );
};

export default Header;
