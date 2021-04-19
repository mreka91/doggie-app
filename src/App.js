import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import logo from "./assets/images/paws.svg";



//pages
import Home from "./pages/Home";
import Barks from "./pages/Barks";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <nav className="nav">
      <Link to="profile">Profile</Link>
        <Link to="/"><img className="logoOfLove" src={logo} alt="logo of love"/></Link>
        <Link to="barks">Barks</Link>
      </nav>
      <div className="App">
        <Router>
          <Profile path="/profile"/>
          <Home path="/" />
          <Barks path="/barks" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
}

export default App;
