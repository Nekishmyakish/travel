import React from "react";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import Feed from "./components/feed/feed";
import TravelItem from "./components/travelItem/travelItem";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/about" component={Header} />
        <Route exact path="/about" component={Login} />
        <Route exact path="/about" component={Profile} />
        <Route exact path="/about" component={Feed} />
        <Route exact path="/" component={TravelItem} />
      </Router>
      <TravelItem
        userName="Nikita"
        repostDate="@Netflix - 21 May"
        content="Sunday mood: Watching time travel movies to find a way"
      />
    </div>
  );
}

export default App;
