import React from "react";
import Messages from "../../components/Messages";
import Title from "../../components/Title";
import "./index.css";


const Barks = () => {
  return (
    <div className="matched">
      <Title>See all your barks!&#128054;</Title>
      <Messages headline="Elsie" message="hej snygging, ses ikväll?" />
      <Messages headline="Fido" message="va det du som kissade på segelvägen nyss?" />
      <Messages headline="Otis" message="får jag bjuda dig på tuggben ikväll?" />
      <Messages headline="Trixa" message="hej hur mår du? matte drog just fram dammsugaren :(" />
    </div>
  );
};

export default Barks;
