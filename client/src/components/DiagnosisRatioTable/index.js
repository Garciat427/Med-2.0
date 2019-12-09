import React, { Component } from "react";
import TableRow from "./TableRow";


class DiagnosisRatioTable extends Component {

    state = {
        rawData: []
    };


    render() {
        // const items = this.state.rawData;
        const items = this.props.rawData;
 
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
