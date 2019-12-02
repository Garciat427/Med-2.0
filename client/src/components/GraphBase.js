import React, { Component } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart"
import ScatterChart from "./ScatterChart";
import API from "../utils/API";
import Helper from "../utils/Helper";

class GraphBase extends Component {
    state = {
        chartData: [{
            labels: [],
            data: [],
        }]
    };

    componentDidMount() {

        API.getDiagnosisPath("all", 7)
            .then(res => { 
                console.log("aaaaaaaaaaaaaaaaaaa")
                console.log(res.data) 

                let cities = res.data.map((element, index) => {
                    return element.city
                })
                console.log(cities);
            })
            .catch(err => console.log(err));

        // Call the API to load the pie chart
        API.getAllPrimaryDiagnosisInCityInPastWeekPercentage("all")
            .then(res => {

                let labelsIn = [];
                let dataIn = [];
                let cityIn = [];
                let diagnosesIn = [];
                let rawDataIn = [];

                (res.data).forEach((element, index) => {
                    let p = parseFloat(element.percentage);
                    labelsIn.push("[" + element.city + "] " + element.name);
                    dataIn.push(p);
                    cityIn.push(element.city);
                    diagnosesIn.push(element.name);
                    rawDataIn.push(element);
                });

                let newState = new Helper().cloneObject(this.state);
                newState.chartData[0].labels = labelsIn;
                newState.chartData[0].data = dataIn;

                this.setState(newState);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="grid-example col s12 m6">
                        <span class="flow-text">
                            <PieChart
                                labels={this.state.chartData[0].labels}
                                chartData={this.state.chartData[0].data}
                            />
                        </span>
                    </div>
                    <div class="grid-example col s12 m6">
                        <span class="flow-text">
                            <LineChart
                                labels={this.state.chartData[0].labels}
                                chartData={this.state.chartData[0].data}
                                headerLabel={'Count of Diagnosis in the past 4 weeks'}
                            />
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div class="grid-example col s12 m6">
                        <span class="flow-text">
                            <PieChart
                                labels={this.state.chartData[0].labels}
                                chartData={this.state.chartData[0].data}
                            />
                        </span>
                    </div>
                    <div class="grid-example col s12 m6">
                        <span class="flow-text">
                            <ScatterChart
                                labels={this.state.chartData[0].labels}
                                chartData={this.state.chartData[0].data}
                                headerLabel={'Count of Diagnosis in the past 4 weeks'}
                            />
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div class="grid-example col s12 m12">
                        <span class="flow-text">
                            adasdsa
                        </span>
                    </div>
                </div>

            </div>

        )
    }

}

export default GraphBase;