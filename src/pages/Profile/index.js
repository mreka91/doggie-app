import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Frame from "../../components/Frame";
import "./index.css";
import profilePic from "../../assets/images/dog.jpg"

const Profile = () => {
    let newDate = new Date().toLocaleString();
  return (
      <div className="profil-view">
        <ProfileCard image={profilePic} title="Woff Woffersson" bio="Doggo ipsum. Smol heckin you are doin me a concern most angery pupper I 
        have ever seen porgo very taste wow heck, wow such tempt vvv many pats puggo. 
        Super chub very hand that feed shibe many pats big ol pupper, you are doing me the shock. 
        Pats borkdrive puggo vvv heck borking doggo, wow very biscit very jealous pupper what a nice floof. 
        "/>
        <Frame factText="Your last match was at" factDate={newDate}/>
    </div>
  );
};

export default Profile;
