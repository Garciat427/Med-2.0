import React from "react";
import API from "../../../utils/API";

class TrendsForm extends React.Component {

    state = {

        cityList: [],
        diagnosisList: [],
        isDataLoaded: true
    }

    render() {
        if (this.state.isDataLoaded) {
            return (
                <div className="container">

                    {/* refresh and date selection */}
                    <div className="row">
                        <div className="col s12 center">


                            <p className="range-field">
                                <input type="range" id="time" min="0" max="30"
                                    onMouseUp={this.props.handleSliderChange} />
                            </p>
                        </div>
                    </div>

                    {/* BUTTON SELECTIONS */}
                    <div className="row">
                        <div className="col s6 center">

                            {/* City Buttons section */}
                            <button
                                className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
                                waves="light"
                                style={{ margin: '5px' }}
                                key="AllCities"
                                value="all"
                                onClick={this.props.handleCityClick}
                            >
                                All
                            </button>

                            {this.props.cityLookupList.map(record =>

                                <button
                                    className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
                                    waves="light"
                                    style={{ margin: '5px' }}
                                    key={record.city}
                                    value={record.city}
                                    onClick={this.props.handleCityClick}
                                >
                                    {record.city}
                                </button>
                            )}
                        </div>
                        {/* Diagnosis Buttons section */}
                        <div className="col s6 center">

                            <button
                                className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
                                waves="light"
                                style={{ margin: '5px' }}
                                key="AllDiagnosis"
                                value="all"
                                onClick={this.props.handleDiagnosisClick}
                            >
                                All
                            </button>

                            {this.props.diagnosisLookupList.map(record =>

                                <button
                                    className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
                                    waves="light"
                                    style={{ margin: '5px' }}
                                    key={record.name}
                                    value={record.name}
                                    onClick={this.props.handleDiagnosisClick}
                                >
                                    {record.name}
                                </button>
                            )}
                        </div>

                        {/* HEADERS */}
                        <div className="row">
                            <div className="col s6 center">
                                <p>Showing Data for {this.props.city}</p>
                            </div>
                            <div className="col s6 center">
                                <p>Showing Data for {this.props.disease}</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                </div >
            );
        }
    };
}

export default TrendsForm;