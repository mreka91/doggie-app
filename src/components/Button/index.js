import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonText: "wanna see a dog?",
};

export default Button;