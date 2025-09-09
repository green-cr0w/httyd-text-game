import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from ReactDOM
import App from "./App"; // Import the root component
import "../style.css";

// Find the root DOM element
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create a React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);