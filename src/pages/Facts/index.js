import React from "react";
import Button from "../../components/Button";
import "./index.css";
import Title from "../../components/Title";
import Frame from "../../components/Frame";

const Facts = () => {
  let [facts, setFacts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
      .then((res) => res.json())
      .then((json) => {
        setFacts(json[0].fact);
        console.log(json);
      });
  }, []);

  return (
    <div className="fact-view">
      <Title>Random doggie fact</Title>
      <Frame factText={facts} />
      <Button
        buttonText="Give me another doggie fact"
        handleClick={() => window.location.reload(false)}
      />
    </div>
  );
};

export default Facts;
