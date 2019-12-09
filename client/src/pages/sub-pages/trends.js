import React, { Component } from "react";
import API from "../../utils/API";
import Helper from "../../utils/Helper";
import TrendsForm from "./Trends/TrendsForm";
import GraphBase from "../../components/GraphBase";
import TrendsMap from "./Trends/TrendsMap";
import Path from "../../components/Path";


let rendermap;

class Trends extends Component {

    state = {
        // input data
        city: "all", // the city to show the data to
        disease: "all", // the diagnosis to show
        numberOfDaysRange: 30, // the time range in days

        // lookup data
        cityList: [], // distinct cityList
        diagnosisList: [], // distinct diagnosis name

        // result set data from API call
        pieChartData: {
            labels: [],
            data: [],
        },

        // path data
        pathDataPoints: [],
        pathDataPointsDetails: []

    }

    componentDidMount() {
        this.loadDistinctLookupData();
        this.getRatioAPICall();
        this.getPathAPICall();
    }

    loadDistinctLookupData = () => {
        /* Temp Arrays */
        let cityListResult = [];
        let diagnosisListResult = [];

        /* API Calls */
        API.getDistinctDiagnosis()
            .then(resDignosis => {
                diagnosisListResult = resDignosis.data;

                /* Call Cities API */
                API.getDistinctCities()
                    .then(resCities => {
                        cityListResult = resCities.data

                        /* Set States with Temp Vars */
                        this.setState({ cityList: cityListResult });
                        this.setState({ diagnosisList: diagnosisListResult });

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    getRatioAPICall() {
        API.getAllPrimaryDiagnosisInCityInPastDaysPercentage(this.state.city, this.state.disease, this.state.numberOfDaysRange)
            .then(res => {


                let labelsIn = [];
                let dataIn = [];
                let cityIn = [];
                let diagnosesIn = [];
                let rawDataIn = [];

                (res.data).forEach((element, index) => {
                    let p = Math.round(parseFloat(element.percentage));
                    labelsIn.push("" + element.city + ": " + element.name);
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
                console.log(newChartData);
                let newState = new Helper().cloneObject(this.state);
                newState.pieChartData.labels = newChartData.labels;
                newState.pieChartData.data = newChartData.data;

                this.setState(newState);

            })
            .catch(err => console.log(err));
    }


    getPathAPICall() {
        API.getDiagnosisPath(this.state.disease, this.state.numberOfDaysRange)
            .then(res => {

                let pathDetails = [];
                let pathData = res.data.map((element, index) => {
                    let date = new Helper().formatDateToString(Date.parse(element.diagnosisStartDateTime));

                    let point = {
                        lat: parseFloat(element.latitude),
                        long: parseFloat(element.longitude),
                        disease: element.diagnosisName + " at " + date
                    }

                    let pointDetail = {
                        lat: parseFloat(element.latitude),
                        long: parseFloat(element.longitude),
                        disease: element.diagnosisName + " in " + element.city + " at " + date
                    }
                    pathDetails.push(pointDetail);


                    return point
                })
                this.setState({ pathDataPoints: pathData });
                this.setState({ pathDataPointsDetails: pathDetails });


                console.log("path:")
                console.log(this.state.pathDataPoints);
                console.log(this.state.pathDataPointsDetails);
            })
            .catch(err => console.log(err));
    }


    handleCityFilterClick = (event) => {
        event.preventDefault();
        console.log("handleCityFilterClick: " + event.target.value);
        this.setState({ city: event.target.value });
        this.getRatioAPICall();
        this.getPathAPICall();

    }

    handleDiagnosisFilterClick = (event) => {
        event.preventDefault();
        console.log("handleDiagnosisFilterClick: " + event.target.value);
        this.setState({ disease: event.target.value });
        this.getRatioAPICall();
        this.getPathAPICall();

    }

    handleTimeFilterChange = (event) => {
        event.preventDefault();
        console.log("handleTimeFilterChange: " + event.target.value);
        this.setState({ numberOfDaysRange: event.target.value });
        this.getRatioAPICall();
        this.getPathAPICall();
    }



    render() {

        return (
            <div>
                {/* Header */}
                <div className="container">
                    <h4 className="center">Stats and Trends for {this.state.numberOfDaysRange} days</h4>
                </div>

                {/* Form Data */}
                <div className="row">
                    <div className=" col s12">
                        <TrendsForm
                            city={this.state.city}
                            disease={this.state.disease}
                            rendermap={this.state.rendermap}
                            handleCityClick={this.handleCityFilterClick}
                            handleDiagnosisClick={this.handleDiagnosisFilterClick}
                            handleSliderChange={this.handleTimeFilterChange}
                            formParamaters={this.state.formParamaters}
                            cityLookupList={this.state.cityList}
                            diagnosisLookupList={this.state.diagnosisList}
                        />
                    </div>
                </div>
                {/* Graph  */}
                <div className="row">
                    <div className=" col s12">
                        <GraphBase
                            cityName={this.state.city}
                            diagnosisName={this.state.disease}
                            numberOfDaysRange={this.state.numberOfDaysRange}
                            pieChartData={this.state.pieChartData}
                            lineChartData={this.state.pieChartData}

                        />
                    </div>
                </div>

                {/* Map  */}
                <div className="row">
                    <div className=" col s12">
                        <TrendsMap
                            points={this.state.pathDataPoints}
                            handlMapDataLoad={this.handleMapLoad}
                        />
                    </div>
                </div>

                <Path
                    pathDataPointsDetails={this.state.pathDataPointsDetails}
                />


            </div>
        )
    }
}

export default Trends;
