import React, { useState } from "react";

const Console: React.FC = () => {
  const [messages, setMessages] = useState<string[]>(["Welcome to the game!"]); // Initial message
  const [userInput, setUserInput] = useState<string>(""); // Current input

  // Handle input submission
  const handleInputSubmit = () => {
    if (userInput.trim() === "") return; // Ignore empty input
    setMessages((prevMessages) => [...prevMessages, `> ${userInput}`]); // Add input to messages
    setUserInput(""); // Clear input field
  };

  return (
    <div id="console" style={{ height: "70%", overflowY: "auto", borderTop: "1px solid #ccc" }}>
      {/* Console Text */}
      <div id="console-text" style={{ padding: "10px" }}>
        {messages.map((message, index) => (
          <p key={index}>{message}</p> // Render each message
        ))}
      </div>

      {/* User Input */}
      <input
        type="text"
        id="userInput"
        placeholder="Type your command here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} // Update input state
        onKeyDown={(e) => {
          if (e.key === "Enter") handleInputSubmit(); // Submit on Enter
        }}
        style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
      />
    </div>
  );
};

export default Console;