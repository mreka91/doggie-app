import React from "react";
import "./index.css";

const Frame = (props) => {
  return (
    <div className="frame">
      <p>{props.factText}</p>
      <p>{props.factDate}</p>
    </div>
  );
};


export default Frame;
