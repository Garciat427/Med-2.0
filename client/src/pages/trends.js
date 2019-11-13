import React, { Component } from "react";

import { Link } from "react-router-dom";
import TrendsForm from "../components/TrendsForm";
import TrendsMap from "../components/TrendsMap"


class Trends extends Component {
    render (){ 
        return (
            <body>
                <h3> med 2.0 Trends Page </h3>
                <div className="container">
                    <TrendsForm />
                    <TrendsMap />
                </div>
                
            </body>

            
            )
    }

}

export default Trends;