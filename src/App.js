import React from "react";
import "./index.css";
import { Router, Link } from "@reach/router";

//components
import Title from './components/Title';


//pages
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import NotFound from "./pages/NotFound";
import Facts from "./pages/Facts";


function App() {
  return (
<>
    <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="pictures">Pictures</Link>
    <Link to="facts">Facts</Link>
  </nav>
    <div className="App">
    <Router>
          <Home path="/" />
          <Pictures path="/pictures" />
          <Facts path="/facts" />
          <NotFound default />
        </Router>
    </div>

    </>
  );
}

export default App;
