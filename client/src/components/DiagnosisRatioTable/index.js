import React, { Component } from "react";
import TableRow from "./TableRow";
import API from "../../utils/API";
import Helper from "../../utils/Helper";

class DiagnosisRatioTable extends Component {

    state = {
        rawData: []
    };

    // componentDidMount() {
    //     console.log (this.props.cityName);
    //     this.callAPI(this.props.cityName);
    // }

    // callAPI(cityName) {
    //     // Call the API to load the pie chart
    //     API.getAllPrimaryDiagnosisInCityInPastWeekPercentage(cityName)
    //         .then(res => {

    //             let rawDataIn = [];

    //             (res.data).forEach((element) => {
    //                 rawDataIn.push(element);
    //             });

    //             let newState = new Helper().cloneObject(this.state);
    //             newState.rawData = rawDataIn;
    //             this.setState(newState);
    //         })
    //         .catch(err => console.log(err));
    // }

    render() {
        // const items = this.state.rawData;
        const items = this.props.rawData;
        console.log("here ************");
        console.log(items);

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

                        {items.map((item, index) => {
                            return <TableRow
                                key={index}
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
