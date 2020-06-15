import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <p style={{ color: "red" }}>Hi</p>
    </div>
  );
}

export default Header;
