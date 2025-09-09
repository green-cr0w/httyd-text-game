import React, { useState } from "react";
import TopHeader from "./components/TopHeader";
import MainWindow from "./components/MainWindow";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState("main"); // Track the current screen

  return (
    <div id="app">
      {/* Top Header (always visible) */}
      <TopHeader setCurrentScreen={setCurrentScreen} />

      {/* Main Window (dynamic content) */}
      <MainWindow currentScreen={currentScreen} />
    </div>
  );
};

export default App;