import React from "react";

import "./index.css";

const Reaction = (props) => {
  return (
    <div className="reactions">
      <button className="reaction" onClick={props.handleClick}>
      <img className="like-heart" src={props.icon}/>
      </button>
    </div>
  );
};

export default Reaction;
