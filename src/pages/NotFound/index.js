import React from "react";
import { navigate } from "@reach/router";
import Button from "./../../components/Button";
import "./index.css";

const NotFound = (props) => {
  return (
    <div className="not-found-view">
      <h1>404</h1>
      <p>Oh, no! No doggies?! Click to go back</p>
      <img
        src="https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif"
        alt="no more doggies"
      />
      <Button buttonText="Go see doggies " handleClick={() => navigate("/")} />
    </div>
  );
};

export default NotFound;
