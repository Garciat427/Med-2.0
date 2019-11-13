// done by arif (+ Troy :3) 

// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Dependencies
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Page Dependencies 
import Home from "./pages/home";
import Diagnosis from "./pages/diagnosis";
import Trends from "./pages/trends";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />  
        <Switch>
          <Route exact path="/" component={Home} /> {/* Root Path - HomePage */}
          <Route exact path="/diagnosis" component={Diagnosis} /> {/* /Diagnosis Path - Diagnosis Page */}
          <Route exact path="/trends" component={Trends} />
          {/* If No Route match - Display Error Page */}
          <Route component={ErrorPage} />
        </Switch> 
        <Footer />

      </div>
    </Router>
  );
}

export default App;
