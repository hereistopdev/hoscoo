import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import React, { useState, useEffect } from "react";
import ivana from "assets/images/ivana-square.jpg";
import { Link } from "react-router-dom";

function generateRandomString() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const length = 4;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  // result[0] = result[0].toUpperCase();

  return result;
}

function RealTimeText() {
  const [text, setText] = useState(""); // Local state for text
  const [socket, setSocket] = useState(null); // WebSocket connection
  const [oldtext, setOldText] = useState("This is the test sent...");
  const [isTyping, setIsTyping] = useState(false); // Track if someone is typing
  const [typingUser, setTypingUser] = useState(""); // Track who is typing
  const [tempuser, setTempUser] = useState(generateRandomString());

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket("wss://hoscoo.onrender.com");
    // const ws = new WebSocket("ws://localhost:5000");

    // Set up WebSocket connection
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    // Listen for messages from the server
    ws.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data); // Parse incoming JSON
        if (receivedData.text) {
          setOldText(receivedData.text); // Update the text from the server
        }
        if (receivedData.typing) {
          setIsTyping(true);
          setTypingUser(receivedData.user); // Set the user who is typing
        } else {
          setIsTyping(false);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText); // Update local state

    // Notify the server that the user is typing
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ typing: true, user: tempuser })); // Send typing status
    }
  };

  const handleSend = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ text: text })); // Send new text to server as JSON
      socket.send(JSON.stringify({ typing: false, user: tempuser })); // Notify that typing has stopped
    }
    setText(""); // Clear the input after sending
  };

  const demo = [
    {
      image: ivana,
      name: "Ivanna",
      description: "About files I can..",
      action: {
        type: "internal",
        route: "/pages/profile/profile",
        color: "info",
        label: "reply",
      },
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {demo.map(({ image, name, description, action }) => (
        <SoftBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
          <SoftBox mr={2}>
            <SoftAvatar src={image} alt="something here" variant="rounded" shadow="md" />
          </SoftBox>
          <SoftBox
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <SoftTypography variant="button" fontWeight="medium">
              {name}
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              {oldtext}
            </SoftTypography>
          </SoftBox>
          <SoftBox ml="auto">
            {action.type === "internal" ? (
              <SoftButton component={Link} to={action.route} variant="text" color="info">
                {action.label}
              </SoftButton>
            ) : (
              <SoftButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="text"
                color={action.color}
              >
                {action.label}
              </SoftButton>
            )}
          </SoftBox>
        </SoftBox>
      ))}

      {/* Display "User is typing..." when someone is typing */}
      {isTyping && typingUser !== tempuser && (
        <SoftTypography size={"10px"}>{typingUser} is typing...</SoftTypography>
      )}

      <textarea
        style={{ width: "100%", height: "100px" }}
        value={text}
        onChange={handleTextChange}
      />
      <SoftButton onClick={handleSend}>Send</SoftButton>
    </div>
  );
}

export default RealTimeText;
