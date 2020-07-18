import React, { useState } from "react";
import styles from "./Welcome.module.css";
import Logo from "../../logos/Logo_KLC.png";

function Welcome() {
  const [zindex, setZindex] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [display, setDisplay] = useState();

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  setTimeout(() => {
    setZindex(0);
    setDisplay("none");
    enableScrolling();
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

  disableScrolling();

  return (
    <div className={styles.container} style={theStyle}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.welcome} style={{ color: "white" }}>
        Welcome to my portfolio Page
      </h1>
    </div>
  );
}

export default Welcome;
