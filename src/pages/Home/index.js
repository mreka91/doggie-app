import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import Reaction from "../../components/Reaction";
import sadDog from "../../assets/images/saddog.png";
import heart from "../../assets/images/heart-48-64.png";
import notheart from "../../assets/images/x-mark-64.png";
import "./index.css";
import Match from "../../components/Match";


const dogNames = require("dog-names");

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(0);
  const url = "https://dog.ceo/api/breeds/image/random/10";
  

  const randomDogName = dogNames.allRandom();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.message.length);
        setDogs(result.message);
      });
    /*       .catch((error) => {
        alert("error", error);
      }) */
  }, []);

  const next = (likeOrDislike) => {
    setIndex(index + 1);
    if (likeOrDislike === "like") {
    setMatches(dogs[index]);
    }
  };

  return (
    <div className="home-view">
      <Title>Find your perfect match!</Title>
        {index <= dogs.length - 1 ? (
          <Card image={dogs[index]} title={randomDogName} />
        ) : (
          <Card image={sadDog} title="Come back tomorrow to see more doggies" />
        )}
      <div className="reactions-home">
        <Reaction icon={heart} handleClick={() => next("like")} />

        {dogs.length - index <= 0 ? (
          <Match match="No more swipes for today" matchNumber="" />
        ) : (
          <Match
            match="Swipes left:"
            matchNumber={dogs.length - index}
          />
        )}
        <Reaction icon={notheart} handleClick={() => next("dislike")} />
      </div>
      <div>
        <Card image={matches} title="I woff you!" />
      </div>
    </div>
  );
};

export default Home;
