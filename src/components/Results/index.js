import React from "react";
import PropTypes from "prop-types";
import { ContainerText, ImageContainer, ResultsImage } from "./styles";


const Results = (props) => {
  return (
    <ImageContainer>
      <ResultsImage src={props.image} alt={props.alt} className="polaroid-image"/>
      <ContainerText />
        <h3>{props.title}</h3>
    </ImageContainer>
  );
};

Results.propTypes = {
  alt: PropTypes.string,
};

Results.defaultProps = {
  alt: "picture of a dog",
};

export default Results;