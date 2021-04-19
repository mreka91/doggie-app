import React from "react";
import PropTypes from "prop-types";
import { ProfileImageStyled, ProfileParStyled, ProfileStyled, ProfileTextStyled, ProfileTitleStyled } from "./styles";

const ProfileCard = (props) => {
  return (
    <ProfileStyled>
      <ProfileImageStyled src={props.image} alt={props.alt}/>
      <ProfileTextStyled>
        <ProfileTitleStyled>{props.title}</ProfileTitleStyled>
        <ProfileParStyled>{props.bio}</ProfileParStyled>
      </ProfileTextStyled>
    </ProfileStyled>
  );
};

ProfileCard.propTypes = {
  alt: PropTypes.string,
};

ProfileCard.defaultProps = {
  alt: "profile pic",
};

export default ProfileCard;