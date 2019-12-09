// done by arif (+ Troy :3) 

// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Dependencies

// Page Dependencies 
import Home from "./sub-pages/Home";
import Trends from "./sub-pages/Trends";
import ErrorPage from "./sub-pages/ErrorPage";
import Diagnosis from "./sub-pages/Diagnosis/Diagnosis";
import login from "./sub-pages/Login"

function MainApp() {
    return (
    <div>
        <Router>
            <Switch>
                {/* Root Path - HomePage */}
                <Route exact path="/" component={Home} />

                {/* /Login - login Page */}   
                <Route exact path="/login" component={login} />   

                {/* /Diagnosis Paths - Diagnosis Page */}   
                <Route exact path="/diagnosis" component={Diagnosis} />
                

                {/* /Trends Path - Trends Page */}   
                <Route exact path="/trends" component={Trends} />   
            
                {/* If No Route match - Display Error Page */}
                <Route component={ErrorPage} />
            </Switch> 
        </Router>
    </div>
    );
}

export default MainApp;
