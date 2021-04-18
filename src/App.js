import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import logo from "./assets/images/paws.svg";



//pages
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <nav className="nav">
      <Link to="profile">Profile</Link>
        <Link to="/"><img className="logoOfLove" src={logo} alt="logo of love"/></Link>
        <Link to="matches">Matches</Link>
      </nav>
      <div className="App">
        <Router>
          <Profile path="/profile"/>
          <Home path="/" />
          <Matches path="/matches" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
}

export default App;
