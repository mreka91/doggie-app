import React from "react";
import PropTypes from "prop-types";
import bone from "../../assets/images/dog_bone.webp";
import { ButtonImage, ButtonStyled } from "./styles";

const Button = (props) => {
  return (
    <ButtonStyled onClick={props.handleClick}>
      {props.buttonText}
      <ButtonImage src={bone} alt="bone" />
    </ButtonStyled>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonText: "wanna see a dog?",
};

export default Button;
