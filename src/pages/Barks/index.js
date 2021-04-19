import React from "react";
import Messages from "../../components/Messages";
import Title from "../../components/Title";
import "./index.css";


const Barks = () => {
  return (
    <div className="matched">
      <Title>See all your barks!&#128054;</Title>
      <Messages headline="Elsie" message="hej snygging, ses ikväll?" />
      <Messages headline="Maia" message="hej snygging, ses ikväll?" />
      <Messages headline="Otis" message="hej snygging, ses ikväll?" />
      <Messages headline="Trixa" message="hej snygging, ses ikväll?" />
    </div>
  );
};

export default Barks;
