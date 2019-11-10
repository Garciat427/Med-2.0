import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
    render (){ 
        return (
            <body>
            <div className="container">
                <div className="row">
                    <div className="col s12">Pie chart for diseases + intro</div>
                    <div className="col s6">Diagnosis Button</div>
                    <div className="col s6">Trends Button</div>
                </div>
            </div>
            </body>

            )
    }

}

export default Home;