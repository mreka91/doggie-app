import React from "react";
import "./index.css";

const Messages = (props) => {
    return (
        <div className="messages-box">
            <h1>{props.headline}</h1>
            <p>{props.message}</p>
        </div>
    )
}

export default Messages;