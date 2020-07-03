import React, { useContext } from "react";
import { DarkModeContext } from "../Darkmode/darkModeContext";
import Brightness5OutlinedIcon from "@material-ui/icons/Brightness5Outlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import styles from "./Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const switchDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? styles.containerDark : styles.container}>
      <div className={styles.name}>
        <div>
          <h1>Luis Schekerka</h1>
        </div>
      </div>
      <div className={styles.navigation}>
        <nav>
          <a
            href="#about"
            className={darkMode ? styles.navElementDark : styles.navElement}
          >
            About
          </a>
          <a
            href="#projects"
            className={darkMode ? styles.navElementDark : styles.navElement}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={darkMode ? styles.navElementDark : styles.navElement}
          >
            Contact
          </a>
        </nav>
        {darkMode ? (
          <Brightness5OutlinedIcon
            style={{ fontSize: 30 }}
            className={styles.sun}
            onClick={switchDarkMode}
          />
        ) : (
          <NightsStayOutlinedIcon
            style={{ fontSize: 30 }}
            className={styles.moon}
            onClick={switchDarkMode}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
