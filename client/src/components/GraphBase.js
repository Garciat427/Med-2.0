import React, { Component } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart"

class GraphBase extends Component {
    state = {
        chartData: [{
            labels: [],
            data: [],
        }],

        formParamaters: {
            selectedCityToDisplay: "all",
            selectedDiagnosisToDisplay: "all",
            selectedDays: 30
        }

    };

 



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="grid-example col s12 m6">
                        <span className="flow-text">
                            <PieChart
                                labels={this.props.pieChartData.labels}
                                chartData={this.props.pieChartData.data}
                            />
                        </span>
                    </div>
                    <div className="grid-example col s12 m6">
                        <span className="flow-text">
                            <LineChart
                                chartLabels={this.props.pieChartData.labels}
                                chartData={this.props.pieChartData.data}
                                headerLabel={'Count of Diagnosis in the past 4 weeks'}
                            />
                        </span>
                    </div>
                </div>

            </div>

        )
    }

}

export default GraphBase;