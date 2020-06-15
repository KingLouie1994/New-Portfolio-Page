import React, { useState } from "react";
import styles from "./Welcome.module.css";
import Logo from "../../images/Logo_KLC.png";

function Welcome() {
  const [zindex, setZindex] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState();

  setTimeout(() => {
    setZindex(0);
    setDisplay("none");
  }, 5000);

  if (opacity <= 1 && opacity > 0) {
    setTimeout(() => {
      setOpacity(opacity - 0.001);
    }, 3);
  }

  const theStyle = {
    zIndex: `${zindex}`,
    opacity: `${opacity}`,
    display: `${display}`,
  };

  return (
    <div className={styles.container} style={theStyle}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <h2 style={{ color: "white" }}>Portfolio Page comming soon</h2>
    </div>
  );
}

export default Welcome;
