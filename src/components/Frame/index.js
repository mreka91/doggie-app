import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Frame = (props) => {
  return (
    <div className="frame">
      <h1>{props.factText}</h1>
    </div>
  );
};

Frame.propTypes = {
  factText: PropTypes.array,
};

Frame.defaultProps = {
  factText: "wanna read about a dog?",
};

export default Frame;
