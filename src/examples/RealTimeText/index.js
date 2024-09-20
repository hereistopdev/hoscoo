import React, { useState, useEffect } from "react";

function RealTimeText() {
  const [text, setText] = useState(""); // Local state for text
  const [socket, setSocket] = useState(null); // WebSocket connection

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket("wss://hoscoo.onrender.com"); //("ws://localhost:3000");

    // Set up WebSocket connection
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    // Listen for messages from the server
    ws.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data); // Parse incoming JSON
        if (receivedData.text) {
          setText(receivedData.text); // Update the text state with the received data
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    // Set WebSocket to state for further use
    setSocket(ws);

    // Clean up the WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, []);

  // Handle text input change
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText); // Update local state
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ text: newText })); // Send new text to server as JSON
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real-time Collaborative Text Editor</h1>
      <textarea
        style={{ width: "100%", height: "300px" }}
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default RealTimeText;
