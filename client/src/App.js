// done by arif

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Diagnosis from "./pages/diagnosis";
import Trends from "./pages/trends";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/diagnosis" component={Diagnosis} />
          <Route exact path="/trends" component={Trends} />
          <Route component={NoMatch} />
        </Switch> 

      </div>
    </Router>
  );
}

export default App;
