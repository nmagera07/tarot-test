//Dependencies//
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
//Styling//
import "./App.css";

//Components//
import Home from "./components/Views/home";
import Card from "./components/Views/cardView";
import Header  from "./components/Global/Header";

function App(props) {

  return (
    // <GreetingContext.Provider value={{greeting, setGreeting}}>
          <div className="App">  
          <Router>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Home} /> 
            <Route path="/cards" component={Card} />
          </Router> 
          </div>

  )
}

export default App;