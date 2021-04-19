import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Frame from "../../components/Frame";
import "./index.css";
import profilePic from "../../assets/images/maia.jpg"

const Profile = () => {
    let newDate = new Date().toLocaleString();
  return (
    <div className="background">
      <div className="profil-view">
        <ProfileCard image={profilePic} title="Maia" bio="Älskar bollar, bad och katter. hatar jack russels. "/>
        <Frame factText="Your last match was at" factDate={newDate}/>
      </div>
      </div>
  );
};

export default Profile;
