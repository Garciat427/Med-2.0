import React, { Component } from "react";
import API from "../../utils/API";
import Helper from "../../utils/Helper";
//import { Link } from "react-router-dom";
import TrendsForm from "./Trends/TrendsForm";
import TrendsMap from "./Trends/TrendsMap";
import TrendsChart from "../../components/DiagnosisRatioTable";
import { set } from "mongoose";

let rendermap;

class Trends extends Component {

    callAPI(cityName) {
        // Call the API to load the pie chart
        API.getAllPrimaryDiagnosisInCityInPastWeekPercentage(cityName)
            .then(res => {

                let rawDataIn = [];

                (res.data).forEach((element) => {
                    rawDataIn.push(element);
                });

                let newState = new Helper().cloneObject(this.state);
                newState.percentageData = rawDataIn;
                this.setState(newState);
            })
            .catch(err => console.log(err));
    }

    state = {
        city: "",
        disease: "",
        rendermap: false,
        percentageData: []
    }

    handleInputChange = event => {
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);
        console.log("handle input change");
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });

    };


    handleFormSubmit = (event, city) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        //setState ()
        API.getAllPrimaryDiagnosisInCityInPast4Weeks(this.state.city)
            .then(res => {
                let newState = new Helper().cloneObject(this.state);

                this.callAPI(this.state.city);
                newState.renderMap = true;

                // this.setState({ records: res.data });
                this.setState(newState);
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <div className="container">
                    <h5> Have a look at various diagnosis trends </h5>
                </div>
                <TrendsForm city={this.state.city} disease={this.state.disease} rendermap={this.state.rendermap} change={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />

                {/* {this.state.rendermap ?<TrendsChart rawData={this.state.percentageData} /> : null} */}
                {/* {this.state.rendermap ? <TrendsMap /> : null} */}
                {/* <TrendsChart 
                        cityName = {this.state.city}
                    /> */}

                <TrendsChart rawData={this.state.percentageData} />
            </div>
        )
    }
}

export default Trends;
