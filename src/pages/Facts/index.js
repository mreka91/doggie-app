import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import Reaction from "../../components/Reaction";
import Button from "../../components/Button";
import sadDog from "../../assets/images/saddog.png";
import "./index.css";
import Match from "../../components/Match";

const Facts = () => {
  const [dogs, setDogs] = useState([]);
  const [index, setIndex] = useState(0);
  const url = "https://dog.ceo/api/breeds/image/random/10";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.message.length);
        setDogs(result.message);
      })
      .catch((error) => {
        alert("error", error);
      });
  }, []);

  const next = () => {
    setIndex(index + 1);
    console.log(index);
    console.log(dogs.length);
  };

  return (
    <div className="fact-view">
      <Title>Find your perfect match!</Title>
      <div>
        {index <= dogs.length ? (
          <Card image={dogs[index]} title="Is it me?" />
        ) : (
          <Card image={sadDog} title="Come back tomorrow to see more doggies" />
        )}
      </div>
      <div>
        {dogs.length - index === 0 ? (
          <Match match="No more" />
        ) : (
          <Match
            match="Possible matches left for today:"
            matchNumber={dogs.length - index}
          />
        )}
      </div>
      <div className="reactions">
        <Reaction icon="💗" handleClick={() => next()} />
        <Button buttonText="Get to know me" />
        <Reaction icon="❌" handleClick={() => next()} />
      </div>
    </div>
  );
};

export default Facts;
