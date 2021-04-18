import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import bone from "../../assets/images/dog_bone.webp";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.buttonText}
      <span className="dogs-left">{props.matchNumber}</span>
      {/* <img src={bone} alt="bone" /> */}
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
