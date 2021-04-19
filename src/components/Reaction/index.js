import React from "react";
import { Reactions, LikeImg } from "./styles";


const Reaction = (props) => {
  return (
      <Reactions onClick={props.handleClick}>
      <LikeImg src={props.icon} alt="a little love"/>
      </Reactions>
  );
};

export default Reaction;
