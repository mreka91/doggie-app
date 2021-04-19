import React from 'react';
import PropTypes from 'prop-types';

import {
  CardStyled,
  CardContentStyled,
  CardImageStyled,
} from './styles';

const Kort = (props) => {
  return (
    <CardStyled {...props}>
      <CardImageStyled src={props.image} alt="" />
      <CardContentStyled>
        <h3>{props.title}</h3>
        <p>{props.distance} km away</p>
      </CardContentStyled>
    </CardStyled>
  );
};

Kort.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  distance: PropTypes.number,
};

Kort.defaultProps = {
  alt: "picture of a dog",
};

export default Kort;