import React from "react";
import { MessageBoxStyled, MessagesTitleStyled } from "./styles";

const Messages = (props) => {
  return (
    <MessageBoxStyled>
      <MessagesTitleStyled>{props.headline}</MessagesTitleStyled>
      <p>{props.message}</p>
    </MessageBoxStyled>
  );
};

export default Messages;
