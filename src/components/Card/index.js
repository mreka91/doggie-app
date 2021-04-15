import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Card = (props) => {
  return (
    <article className="polaroid">
      <img src={props.image} alt={props.alt} />
      <div className="container">
        <h3>{props.title}</h3>
      </div>
    </article>
  );
};

Card.propTypes = {
  alt: PropTypes.string,
};

Card.defaultProps = {
  alt: "Come back tomorrow",
};

export default Card;
