import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Button from "../../components/Button";
import "./index.css";
import Title from "../../components/Title";

const Facts = () => {

const [facts, setFacts] = React.useState([]);

  React.useEffect(() => {
    fetch("api/v1/resources/dogs?number=1")
      .then((res) => res.json())
      .then((json) => {
    
        setFacts(json[0].fact);
        //console.log(json);
        
      });
  }, []); 

  return (
    <div className="not-found-view">
      <Title>Hello facts</Title>
      <span>{facts}</span>
    </div>
    
  );
};

export default Facts;