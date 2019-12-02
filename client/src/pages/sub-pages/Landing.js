import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../../utils/API";
import GraphBase from "../../components/GraphBase";

class Landing extends Component {
    state = {
        results: "hello"
    };
    render() {
        return (
            <div>
                <GraphBase />
            </div>
        );
    }
}

export default Landing;
