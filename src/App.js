import React from "react";
import TravelItem from "./components/travelItem/travelItem";
import "./components/travelItem/travelItem.css";
import Login from "./components/login/login";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="travelItem">
      <Router>
      <Link to="/">Home</Link>        
       <Link to="/about">About</Link>        
       <Route exact path="/" component={TravelItem} />        
       <Route exact path="/about" component={Login} />       
      </Router>
    </div>
  );
}

export default App;
