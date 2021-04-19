import React from "react";
import { FrameStyled, FrameTextStyled } from "./styles";

const Frame = (props) => {
  return (
    <FrameStyled>
      <FrameTextStyled>{props.factText}</FrameTextStyled>
      <FrameTextStyled>{props.factDate}</FrameTextStyled>
    </FrameStyled>
  );
};


export default Frame;
