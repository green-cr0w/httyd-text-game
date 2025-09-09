import React from "react";
import Console from "../Console"; // Import the Console component

const MainScreen: React.FC = () => {
  return (
    <div id="main-screen" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top Area for Picture */}
      <div id="art-area" style={{ height: "30%", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p>Art will be displayed here.</p>
      </div>

      {/* Bottom Area for Console */}
      <Console />
    </div>
  );
};

export default MainScreen;