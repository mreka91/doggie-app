import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Match = (props) => {
  return (
    <div className="matches-frame">
      <h5>{props.match}</h5>
      <p> {props.matchNumber}</p>
    </div>
  );
};

Match.propTypes = {
  match: PropTypes.string,
};

Match.defaultProps = {
  match: "You have endless matches left!",
};

export default Match;
