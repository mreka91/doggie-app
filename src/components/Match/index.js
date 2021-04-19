import React from "react";
import PropTypes from "prop-types";
import { MatchesFrameStyled, MatchesFrameTextStyled, MatchesFrameTitleStyled } from "./styles";

const Match = (props) => {
  return (
    <MatchesFrameStyled>
      <MatchesFrameTitleStyled>{props.match}</MatchesFrameTitleStyled>
      <MatchesFrameTextStyled> {props.matchNumber}</MatchesFrameTextStyled>
    </MatchesFrameStyled>
  );
};

Match.propTypes = {
  match: PropTypes.string,
};

Match.defaultProps = {
  match: "Swipes left:",
};

export default Match;
