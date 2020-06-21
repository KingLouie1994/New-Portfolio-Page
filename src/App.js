import React, {useState, useContext } from "react";
import styles from "./App.module.css";
import { DarkModeContext } from "./components/Darkmode/darkModeContext";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";

function App() {
  const [darkMode] = useContext(DarkModeContext);
  const [padding, setPadding] = useState(0)

  setTimeout(() => {
    setPadding("5rem")
  }, 5000)

  return (
    <div className={darkMode ? styles.appDark : styles.app} style={{paddingBottom: `${padding}`}}>
      <Welcome />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
