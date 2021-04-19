import React from "react";
import "./index.css";

const Messages = (props) => {
  return (
    <div className="messages-box">
      <h1 className="messages-title">{props.headline}</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default Messages;
