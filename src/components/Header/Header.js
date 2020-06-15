import React from "react";
import styles from "./Header.module.css";
import Portrait from "../../images/Portrait.jpeg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.nameAndImage}>
        <div className={styles.portraitContainer}>
            <img src={Portrait} alt={"Portrait"} className={styles.portrait}/>
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
        </nav>
      </div>
    </div>
  );
}

export default Header;
