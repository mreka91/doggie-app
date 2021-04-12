import React from "react";
import PropTypes from "prop-types";
import { TitleStyled } from "./styles.js";

const Title = TitleStyled;

// Set which props this component takes
Title.propTypes = {
  title: PropTypes.string,
};

// Set default props in case no props were passed to the component
Title.defaultProps = {
  title: "Hello",
};

export default Title;
