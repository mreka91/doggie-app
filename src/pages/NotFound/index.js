import React from "react";
import { navigate } from "@reach/router";
import Button from "./../../components/Button";
import "./index.css";

const NotFound = (props) => {
  return (
    <div className="not-found-view">
      <h1>404</h1>
      <p>Oh, something went wrong! Please go back to the home page</p>
      <Button handleClick={() => navigate("/")} buttonText="Go back" />
    </div>
  );
};

export default NotFound;
