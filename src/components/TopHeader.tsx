import React from "react";

interface TopHeaderProps {
  setCurrentScreen: (screen: string) => void; // Function to change the current screen
}

const TopHeader: React.FC<TopHeaderProps> = ({ setCurrentScreen }) => {
  return (
    <div id="top-header">
      <div id="location-time">
        <span id="location">Berk</span> - <span id="time-of-day">Morning</span>
      </div>
      <div className="button-container">
        <div className="button-group">
          <button onClick={() => setCurrentScreen("map")}>Map</button>
          <button onClick={() => setCurrentScreen("inventory")}>Inventory</button>
        </div>
        <div className="button-group">
          <button onClick={() => setCurrentScreen("help")}>Help</button>
          <button onClick={() => setCurrentScreen("settings")}>Settings</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;