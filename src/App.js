import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

//pages
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Facts from "./pages/Facts";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        <Link to={process.env.PUBLIC_URL + "/pictures"}>Pictures</Link>
        <Link to={process.env.PUBLIC_URL + "/facts"}>Facts</Link>
      </nav>
      <div className="App">
        <Router>
          <Home path={process.env.PUBLIC_URL + "/"} />
          <Pictures path={process.env.PUBLIC_URL + "/pictures"} />
          <Facts path={process.env.PUBLIC_URL + "/facts"} />
        </Router>
      </div>
    </>
  );
}

export default App;
