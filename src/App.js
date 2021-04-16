import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";



//pages
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="login">LogIn</Link>
      </nav>
      <div className="App">
        <Router>
          <Home path="/" />
          <LogIn path="/login" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
}

export default App;
