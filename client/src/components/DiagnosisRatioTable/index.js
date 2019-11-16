import React, { Component } from "react";
import TableRow from "./TableRow";
import API from "../../utils/API";
import Helper from "../../utils/Helper";

class DiagnosisRatioTable extends Component {

    state = {
        rawData: []
    };

    componentDidMount() {
        this.callAPI("all");
    }

    callAPI(cityName) {
        // Call the API to load the pie chart
        API.getAllPrimaryDiagnosisInCityInPastWeekPercentage(cityName)
            .then(res => {

                let rawDataIn = [];

                (res.data).forEach((element) => {
                    rawDataIn.push(element);
                });

                let newState = new Helper().cloneObject(this.state);
                newState.rawData = rawDataIn;
                this.setState(newState);
            })
            .catch(err => console.log(err));
    }

    render() {
        const items = this.state.rawData;
        return (

            <div>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Diagnosis</th>
                            <th>Ratio</th>
                        </tr>
                    </thead>

                    <tbody>

                        {items.map((item) => {
                            return <TableRow
                                city={item.city}
                                name={item.name}
                                percentage={item.percentage}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        );

    }

}

export default DiagnosisRatioTable;
