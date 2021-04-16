import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import Reaction from "../../components/Reaction";
import Button from "../../components/Button";
import sadDog from "../../assets/images/saddog.png";
import "./index.css";
import Match from "../../components/Match";

const dogNames = require('dog-names');

const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(0);
  const url = "https://dog.ceo/api/breeds/image/random/10";
  let likedImages = [];

const randomDogName = dogNames.allRandom()

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
    if(likeOrDislike == "like"){
      console.log(dogs[index]);
     likedImages.push(dogs[index]);

      console.log(likedImages);
    }
    //console.log(index);
    //console.log(dogs.length);
  };

  return (
    <div className="home-view">
      <Title>Find your perfect match!</Title>
      <div>
        {index <= dogs.length - 1 ? (
          <Card image={dogs[index]} title={randomDogName} />
        ) : (
          <Card image={sadDog} title="Come back tomorrow to see more doggies" />
        )}
      </div>
      <div>
        {dogs.length - index <= 0 ? (
          <Match match="No more matches for you today!" matchNumber="0" />
        ) : (
          <Match
            match="Possible matches left for today:"
            matchNumber={dogs.length - index}
          />
        )}
      </div>
      <div className="reactions">
        <Reaction icon="💗" handleClick={() => next("like")} />
        <Button buttonText="Get to know me" />
        <Reaction icon="❌" handleClick={() => next("dislike")} />

      </div>
    </div>
  );
};

export default Home;
