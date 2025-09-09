import React from "react";
import MainScreen from "./screens/MainScreen";
import MapScreen from "./screens/MapScreen";
import InventoryScreen from "./screens/InventoryScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HelpScreen from "./screens/HelpScreen";

interface MainWindowProps {
  currentScreen: string; // The current screen to display
}

const MainWindow: React.FC<MainWindowProps> = ({ currentScreen }) => {
  switch (currentScreen) {
    case "map":
      return <MapScreen />;
    case "inventory":
      return <InventoryScreen />;
    case "settings":
      return <SettingsScreen />;
    case "help":
      return <HelpScreen />;
    default:
      return <MainScreen />; // Render MainScreen by default
  }
};

export default MainWindow;