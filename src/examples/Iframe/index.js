import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import React, { useEffect, useState } from "react";

const IframeComponent = ({ src, title, width = "120%", height = "300px" }) => {
  const temp = "https://qtext.io";
  const [url, setUrl] = useState();
  const [text, setText] = useState("");
  const [roomid, setRoomId] = useState("");

  function generateRandomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 8;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  const handleClick = () => {
    const id = generateRandomString();
    setRoomId(id);
    setUrl(temp + "/" + id);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomid).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const handleJoin = () => {
    setUrl(temp + "/" + text);
  };

  return (
    <div>
      <SoftButton onClick={handleClick}>Start</SoftButton>
      <SoftButton onClick={copyToClipboard}>Copy</SoftButton>
      <SoftInput type="password" onChange={(e) => setText(e.target.value)} />
      <SoftButton onClick={handleJoin}>Join</SoftButton>
      <iframe
        id="myiframe"
        src={url}
        title={title}
        width={width}
        height={height}
        style={{ border: "none", marginLeft: "-30px" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeComponent;
