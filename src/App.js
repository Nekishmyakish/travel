import React from "react";
import TravelItem from "./components/travelItem/travelItem";
import Login from "./components/login/login";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={TravelItem} />
        <Route exact path="/about" component={Login} />
      </Router>
      <TravelItem
        userName="Nikita"
        content="Sunday mood: Watching time travel movies to find a way"
      />
    </div>
  );
}

export default App;
