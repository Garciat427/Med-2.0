import React, { Component } from "react";
import PieChart from "../../components/PieChart";
import API from "../../utils/API";

class Home extends Component {
    state = {
        chartData: {
            labels: [],
            data: []
        }
    }

    componentDidMount() {

        // Call the API to load the pie chart
        API.getAllPrimaryDiagnosisInCityInPastWeekPercentage("Hamilton")
            .then(res => {

                let labelsIn = [];
                let dataIn = [];

                (res.data).forEach(element => {
                    labelsIn.push(element.name);
                    dataIn.push(element.percentage);
                });

                let newChartData = {
                    labels: labelsIn,
                    data: dataIn
                }

                this.setState({ chartData: newChartData });
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
                            data={this.state.chartData.data}
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
                        <a className="waves-effect waves-light btn-large" href={"/diagnosis"}>Diagnosis</a>
                    </div>
                    <div className="col s4 center">
                        <a className="waves-effect waves-light btn-large" href={"/trends"}>Trends</a>
                    </div>
                </div>
            </div>

        )
    }

}

export default Home;