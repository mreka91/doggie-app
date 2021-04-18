import React from "react";
import ProfileCard from "../../components/ProfileCard";
import Frame from "../../components/Frame";
import "./index.css";
import profilePic from "../../assets/images/dog.jpg"

const Profile = () => {
    let newDate = new Date().toLocaleString();
  return (
      <div className="profil-view">
        <ProfileCard image={profilePic} title="Woff Woffersson" bio="Doggo ipsum very hand that feed shibe vvv boofers bork doing me a frighten, long bois length boy pats, heckin good boys and girls adorable doggo many pats. Smol heckin you are doin me a concern most angery pupper I have ever seen porgo very taste wow heck, wow such tempt vvv many pats puggo. Super chub very hand that feed shibe many pats big ol pupper, you are doing me the shock. Pats borkdrive puggo vvv heck borking doggo, wow very biscit very jealous pupper what a nice floof. Floofs very good spot dat tungg tho very jealous pupper very good spot long woofer, long bois aqua doggo vvv heckin good boys and girls. Puggorino borking doggo you are doing me the shock yapper h*ck boofers wrinkler, dat tungg tho fluffer shibe heckin good boys and girls very good spot. Most angery pupper I have ever seen woofer fluffer the neighborhood pupper noodle horse clouds you are doing me a frighten blop, he made many woofs most angery pupper I have ever seen many pats long doggo fat boi floofs."/>
        <Frame factText="Your last match was at" factDate={newDate}/>
    </div>
  );
};

export default Profile;
