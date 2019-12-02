import React from "react";
import { Button, Card, Row, Col, Dropdown, Select } from 'react-materialize';
import API from "../../../utils/API";

class TrendsForm extends React.Component {

    state = {
        diagnoses: [],
        records: [],
    }

    componentDidMount() {
        this.DistinctDiagnosis();
        this.DistinctCities();
    }

    DistinctDiagnosis = () => {
        API.getDistinctDiagnosis()
            .then(res =>
                this.setState({ diagnoses: res.data, name: "" })
            )
            .catch(err => console.log(err));
    };
    DistinctCities = () => {
        API.getDistinctCities()
            .then(res =>
                this.setState({ records: res.data, city: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="row">

                    {this.formDropDown()}
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn col s2 left-align"
                        disabled={!(this.props.city)}
                        onClick={this.props.handleFormSubmit} >Submit</button>
                </div>
            </div>
        );
    };

    formDropDown() {
        console.log("*** formDropDown start ***");
        this.state.records.map((records, index) => (
            console.log(records.city)
        ));
        this.state.diagnoses.map((diagnoses, index) => (
            console.log(diagnoses.name)
        ))
        console.log("*** formDropDown End ***");


        return (
            <div>

                <div className="input-field col s6">
                    <select onChange={this.props.change} value={this.props.city} name="city" >
                        <option value="" disabled >Choose your city</option>
                        {this.state.records.map((records, index) => (
                            <option key={records.city + index} value={records.city}>{records.city}</option>
                        ))}
                    </select>
                </div>



                <div className="input-field col s6">
                    <select onChange={this.props.change} value={this.props.disease} name="disease">
                        <option value="" disabled >Choose your disease</option>
                        {this.state.diagnoses.map((diagnoses, index) => (
                            <option key={diagnoses.name + index} value={diagnoses.name}>{diagnoses.name}</option>
                        ))}
                    </select>
                </div>

            </div>
        );
    }

}

export default TrendsForm;