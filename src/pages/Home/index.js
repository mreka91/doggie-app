import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Reaction from "../../components/Reaction";
import sadDog from "../../assets/images/saddog.png";
import heart from "../../assets/images/heart-48-64.png";
import notheart from "../../assets/images/x-mark-64.png";
import "./index.css";
import Match from "../../components/Match";
import Results from "../../components/Results";
import Kort from "../../components/Kort";


const dogNames = require("dog-names");

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(0);
  const url = "https://dog.ceo/api/breeds/image/random/10";
  const randomDistance = Math.floor(Math.random() * 11);

  
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
    setMatches([...matches, dogs[index]]);
    console.log(matches);
    }
  };

  return (
    <div className="home-view">
      <div className="choose-view">
      <Title>Go fetch!</Title>
      
        {index <= dogs.length - 1 ? (
          <Kort image={dogs[index]} title={randomDogName} distance={randomDistance}/>
        ) : (
          <Kort image={sadDog} title="Come back tomorrow to see more doggies" distance={0}/>
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
      </div>
      <div className="matches-list">

      <Title>You matched with:</Title>
     
      { matches.map((item, key) => {
            return (
              <Results image={item} key={key} title="It's a match"/>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
