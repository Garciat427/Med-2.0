import React, { Component } from "react";

//import { Link } from "react-router-dom";
import TrendsForm from "./Trends/TrendsForm";
import TrendsMap from "./Trends/TrendsMap"

let trend = {
    city : "",
    disease : ""
}

class Trends extends Component {

    // state = {
    //     med2,
    //     trend
    // }
    render (){ 
        return (
            <body>
            <div>
                <h3> med 2.0 Trends Page </h3>
                <div className="container">
                    
                    <TrendsForm 
                   
                    />
                    <TrendsMap />
                </div>
                
            </div>
            </body>
            )
    }

}

export default Trends;
