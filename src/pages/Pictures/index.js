import React from "react";
import Button from "../../components/Button";
import "./index.css";
import Title from "../../components/Title";

const Pictures = (props) => {
  let [dogImage, setDogImage] = React.useState(null);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <div className="picture-view">
      <Title>Hello pics</Title>
      {dogImage && <img src={dogImage} alt="doggie"></img>}
      <Button />
    </div>
  );
};

export default Pictures;
