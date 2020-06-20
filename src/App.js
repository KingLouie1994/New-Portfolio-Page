import React, { useContext } from "react";
import styles from "./App.module.css";
import { DarkModeContext } from "./components/Darkmode/darkModeContext";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";

function App() {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div className={darkMode ? styles.appDark : styles.app}>
      <Welcome />
      <Header />
      <About />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
