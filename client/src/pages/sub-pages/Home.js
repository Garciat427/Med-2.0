import React, { Component } from "react";
import PieChart from "../../components/PieChart";
import API from "../../utils/API";
import Helper from "../../utils/Helper";

class Home extends Component {
    state = {
        chartData: {
            labels: [],
            data: [],
        },
        rawData: []
    };

    componentDidMount() {

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

                let newChartData = {
                    labels: labelsIn,
                    data: dataIn,
                    cities: cityIn,
                    diagnoses: diagnosesIn
                }
                let newState = new Helper().cloneObject(this.state);
                newState.chartData = newChartData;
                newState.rawData = rawDataIn;

                this.setState(newState);
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8">

                        <PieChart
                            labels={this.state.chartData.labels}
                            chartData={this.state.chartData.data}
                        />
          
                    </div>
                    <div className="col s4">
                        <h3>Welcome to Med 2.0</h3>
                        <p>
                            We track and follow trends in illnesses in Canada. Check out our Diagnosis Button if you feel you may be ill. Please note we will be using your location, symptoms and diagnosis for our goal of tracking illness. You are welcome to have a look at our trends page as well to see what kind of deseases are currently a concern in your area. Wishing you Good Health!
                        </p>
                    </div>
                </div>
                {/* Button Section */}
                <div className="row">
                    <div className="col s8 center">
                        <a className="waves-effect waves-light btn-large" href={"/diagnosis"}>Get Diagnosis</a>
                    </div>
                    <div className="col s4 center">
                        <a className="waves-effect waves-light btn-large" href={"/trends"}>Show Trends</a>
                    </div>
                </div>
            </div>

        )
    }

}

export default Home;