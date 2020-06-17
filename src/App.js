import React from "react";
import styles from "./App.module.css"
import { DarkModeProvider } from "./components/Darkmode/darkModeContext";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.app}>
      <DarkModeProvider>
        <Welcome />
        <Header />
        <Contact />
      </DarkModeProvider>
    </div>
  );
}

export default App;
