import React, { Component } from "react";

import DiagnosisBtn from "../components/DiagnosisBtn"
import TrendsBtn from "../components/TrendsBtn"

import { Link } from "react-router-dom";

class Home extends Component {
    render (){ 
        return (
            <body>
            <div className="container">
                <div className="row">
                    <div className="col s8">
                        <img src={require ("../components/Images/piechart.jpg")} alt="pie chart" className= "responsive-img" />                      
                    </div>
                    <div className="col s4">
                        <h3>Welcome to Med 2.0</h3>
                        <p>
                            We track and follow trends in illnesses in Canada. Check out our Diagnosis Button if you feel you may be ill. Please note we will be using your location, symptoms and diagnosis for our goal of tracking illness. You are welcome to have a look at our trends page as well to see what kind of deseases are currently a concern in your area. Wishing you Good Health!
                        </p>
                    </div>   
                </div>


                <div className="row">
                    <DiagnosisBtn/>
                    <TrendsBtn/>
                </div>
            </div>
            </body>

            )
    }

}

export default Home;