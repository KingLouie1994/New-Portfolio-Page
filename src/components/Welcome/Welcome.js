import React from "react";
import styles from "./Welcome.module.css";
import Logo from "../../images/Logo_KLC.png";

function Welcome() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <h2 style={{color: "white"}}>Portfolio Page comming soon</h2>
    </div>
  );
}

export default Welcome;
