import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const ProfileCard = (props) => {
  return (
    <article className="profile">
      <img src={props.image} alt={props.alt} className="profile-image"/>
      <div className="profile-text">
        <h3>{props.title}</h3>
        <p>{props.bio}</p>
      </div>
    </article>
  );
};

ProfileCard.propTypes = {
  alt: PropTypes.string,
};

ProfileCard.defaultProps = {
  alt: "profile pic",
};

export default ProfileCard;