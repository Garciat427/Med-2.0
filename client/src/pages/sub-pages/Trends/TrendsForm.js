import React from "react";
import { Button, Card, Row, Col, Dropdown, Select } from 'react-materialize';
import API from "../../../utils/API";

class TrendsForm extends React.Component {

    state = {
        diagnoses: [],
        records: [],
        // city: "",
        // disease: ""
        
    }

    /*     componentDidMount() {
            
            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems, options);
            });
        } */

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

    


    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();

    //     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    //     // alert(`city picked  ${this.props.city} and disease ${this.props.disease}`);
    //     // this.setState({
    //     //   firstName: "",
    //     //   lastName: ""
    //     // });
    
    //         API.getAllPrimaryDiagnosisInCityInPast4Weeks(this.props.city)
    //         .then(res => 
    //             {
    //                 this.setState({ records: res.data });
    //                 // alert(JSON.stringify (res.data));
    //                 alert(JSON.stringify (res.data[0].city));

    //     })
    //         .catch(err => console.log(err));
    // };

    render() {


        return (
            <div className="container">
                <div className="row">
                    {/* <div className="input-field col s4">
                        <input placeholder="Toronto" id="city" type="text" class="validate"
                            onChange={this.handleInputChange} value={this.state.city} name="city" />
                        <label for="city">City</label>
                    </div> */}



                    <div className="input-field col s4">
                        <Select onChange={this.props.change} value={this.props.city} name="city" >
                            <option value="" disabled selected>Choose your city></option>
                            {this.state.records.map((records, index) => (
                                <option key={records.city + index} value={records.city}>{records.city}</option>
                            )
                            )}

                        </Select>
                        {/* <label>Select City</label> */}
                    </div>

                    <div className="input-field col s4">
                     
                        <Select onChange={this.props.change} value={this.props.disease} name = "disease">
                        <option value="" disabled selected>Choose your disease></option>
                            {this.state.diagnoses.map((diagnoses, index) => (
                                <option key = {diagnoses.name + index} value={diagnoses.name }>{diagnoses.name}</option>
                            )
                            )}  

                        </Select>

                        {/* <select onChange={this.handleInputChange} value={this.state.disease} name="disease" >
                            {/* <option value="" disabled selected>Choose your option></option>  
                            {this.state.diagnoses.map((diagnoses, index) => (
                                <option key = {diagnoses.name + index} value={diagnoses.name}>{diagnoses.name}</option>
                            )
                            )}
                             */}
                        {/* <option value="INFLUENZA">INFLUENZA</option>
                            <option value="SYPHILIS">SYPHILIS</option>
                            <option value="3">Option 3</option>
                        </select> */}
                        {/* <label>Select Disease</label> */}

                    </div>

                    <button className="waves-effect waves-light btn col s2"
                        // disabled={!(this.state.city)}
                        onClick={this.props.handleFormSubmit} >Submit</button>
                </div>
            </div>

            // experiment drop down form that is its own

            // <div className="row">
            //     <div className="input-field col s6">
            //         <select onChange={this.handleInputChange} value={this.state.disease} name="disease" >
            //             <option value="" disabled selected>Choose your option></option>
            //             <option value="INFLUENZA">INFLUENZA</option>
            //             <option value="SYPHILIS">SYPHILIS</option>
            //             <option value="3">Option 3</option>
            //         </select>
            //         <label>Select Disease</label>

            //     </div>
            //     <button className="waves-effect waves-light btn col s2" onClick={this.handleFormSubmit} >Submit</button>
            // </div>


        );
    };


}

export default TrendsForm;