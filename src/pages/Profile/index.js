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
        <ProfileCard image={profilePic} title="Maia" bio="Doggo ipsum. Smol heckin you are doin me a concern most angery pupper I 
        have ever seen porgo very taste wow heck, wow such tempt vvv many pats puggo."/>
        <Frame factText="Your last match was at" factDate={newDate}/>
      </div>
      </div>
  );
};

export default Profile;
