import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API";

class Landing extends Component {
    state = {
        results: "hello"
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    componentDidMount() {

        API.getAllPrimryDiagnosisInCityInPast4Weeks("Hamilton")
            .then(res => {
                console.log(res.data);
                this.setState({ results_primary_diagnosis_in_city_in_past_4_weeks: res.data });
            })
            .catch(err => console.log(err));

        API.getAllPrimaryDiagnosisInCityInPastWeekPercentage("Hamilton")
            .then(res => {
                console.log(res.data);
                this.setState({ results_primary_diagnosis_in_city_percentage: res.data });
            })
            .catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.results_primary_diagnosis_in_city_in_past_4_weeks)}


                {JSON.stringify(this.state.results_primary_diagnosis_in_city_percentage)}
            </div>
        );
    }
}

export default Landing;
