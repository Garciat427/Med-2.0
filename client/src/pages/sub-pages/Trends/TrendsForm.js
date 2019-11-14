import React from "react";

import API from "../../../utils/API";

class TrendsForm extends React.Component {

    state = {
        diagnoses: [],
        records: [],
        city: "",
        disease: ""
    };

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

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`city picked  ${this.state.city} and disease ${this.state.disease}`);
        // this.setState({
        //   firstName: "",
        //   lastName: ""
        // });

        // sample handle form submit, also see line98 of pages/Books.js

        // handleFormSubmit = event => {
        //     event.preventDefault();
        //     if (this.state.title && this.state.author) {
        //       API.saveBook({
        //         title: this.state.title,
        //         author: this.state.author,
        //         synopsis: this.state.synopsis
        //       })
        //         .then(res => this.loadBooks())
        //         .catch(err => console.log(err));
        //     }
        //   };



    };

    render() {


        return (
            <div className="container">
                <div className="row">
                    {/* <div className="input-field col s4">
                        <input placeholder="Toronto" id="city" type="text" class="validate"
                            onChange={this.handleInputChange} value={this.state.city} name="city" />
                        <label for="city">City</label>
                    </div> */}

                    

                    <div className="input-field col s6">
                        <select onChange={this.handleInputChange} value={this.state.city} name="city" >
                            <option value="" disabled selected>Choose your option></option>
                            {this.state.records.map(records => (
                                <option value={records.city}>{records.city}</option>
                            )
                            )}
                            <option value="Calgary">Calgary</option>
                            <option value="Edmonton">Edmonton</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Select City</label>
                    </div>

                    <div className="input-field col s6">
                        <select onChange={this.handleInputChange} value={this.state.disease} name="disease" >
                            <option value="" disabled selected>Choose your option></option>
                            {this.state.diagnoses.map(diagnoses => (
                                <option value={diagnoses.name}>{diagnoses.name}</option>
                            )
                            )}
                            <option value="INFLUENZA">INFLUENZA</option>
                            <option value="SYPHILIS">SYPHILIS</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Select Disease</label>
                    </div>

                    <button className="waves-effect waves-light btn col s2" 
                    disabled={!(this.state.city)}
                    onClick={this.handleFormSubmit} >Submit</button>
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