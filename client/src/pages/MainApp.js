// done by arif (+ Troy :3) 

// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Dependencies

// Page Dependencies 
import Home from "./sub-pages/Home";
import AboutMe from "./sub-pages/Diagnosis/AboutMeForm";
import Trends from "./sub-pages/trends";
import ErrorPage from "./sub-pages/ErrorPage";

function MainApp() {
    return (
    <main>
        <Router>
            <Switch>
                {/* Root Path - HomePage */}
                <Route exact path="/" component={Home} />

                {/* /Diagnosis Paths - Diagnosis Page */}   
                <Route exact path="/diagnosis" component={AboutMe} />
                <Route exact path="/diagnosis/body-locations" component={AboutMe} />

                {/* /Trends Path - Trends Page */}   
                <Route exact path="/trends" component={Trends} />   
            
                {/* If No Route match - Display Error Page */}
                <Route component={ErrorPage} />
            </Switch> 
        </Router>
    </main>
    );
}

export default MainApp;