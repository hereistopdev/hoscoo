import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import React, { useState, useEffect } from "react";
import ivana from "assets/images/ivana-square.jpg";
import { Link } from "react-router-dom";

function RealTimeText() {
  const [text, setText] = useState(""); // Local state for text
  const [socket, setSocket] = useState(null); // WebSocket connection
  const [oldtext, setOldText] = useState("This is the test sent...");

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
          // setText(receivedData.text);
          setOldText(receivedData.text);
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
  };

  const handleSend = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ text: text })); // Send new text to server as JSON
    }
    setText("");
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
