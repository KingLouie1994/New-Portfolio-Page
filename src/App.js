import React from "react";
import { DarkModeProvider } from "./components/Darkmode/darkModeContext";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Welcome />
        <Header />
      </DarkModeProvider>
    </div>
  );
}

export default App;
