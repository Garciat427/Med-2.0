import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
    render (){ 
        return (
            <body>
            <div className="container">
                <div className="row">
                {/* this photo won't load even when i place it in the same folder */}
                    <div className="col s12">
                        Pie chart for diseases + intro
                       
                        <img src={require ("../components/Images/piechart.jpg")} alt="pie chart" className= "responsive-img" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 offset-s2">
                    <a className="waves-effect waves-light btn-large" href={"/diagnosis"}>Diagnosis</a>
                    </div>
                    <div className="col s6 offset-s2">
                    <a className="waves-effect waves-light btn-large" href={"/trends"}>Trends</a>
                    </div>
                </div>
            </div>
            </body>

            )
    }

}

export default Home;