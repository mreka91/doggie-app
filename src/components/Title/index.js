import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Title = (props) => <h3 className="title">{props.children}</h3>;

// Set which props this component takes
Title.propTypes = {
  title: PropTypes.string,
};

// Set default props in case no props were passed to the component
Title.defaultProps = {
  title: "Welcome?",
};

export default Title;