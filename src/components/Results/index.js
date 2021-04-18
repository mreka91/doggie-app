import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Results = (props) => {
  return (
    <article className="polaroid">
      <img src={props.image} alt={props.alt} className="polaroid-image"/>
      <div className="container">
        <h3>{props.title}</h3>
      </div>
    </article>
  );
};

Results.propTypes = {
  alt: PropTypes.string,
};

Results.defaultProps = {
  alt: "picture of a dog",
};

export default Results;