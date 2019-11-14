import React from "react";

class TrendsForm extends React.Component {

    state = {
        city: "",
        disease: ""
      };

/*     componentDidMount() {
        
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
        });
    } */

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
        alert(`Hello ${this.state.city} ${this.state.disease}`);
        // this.setState({
        //   firstName: "",
        //   lastName: ""
        // });
      };

    render() {


        return (
            <div className="container">
            <div className="row">

                <div className="input-field col s5">
                    <input placeholder="Toronto" id="city" type="text" class="validate" 
                    onChange={this.handleInputChange} value={this.state.city} name="city" />
                    <label for="city">City</label>
                </div>

            

                <div className="input-field col s5">
                    <select onChange={this.handleInputChange} value={this.state.disease} name="disease" >
                        <option value="" disabled selected>Choose your option></option>
                        <option value="INFLUENZA">INFLUENZA</option>
                        <option value="SYPHILIS">SYPHILIS</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Select Disease</label>
                </div>

            <button className="waves-effect waves-light btn col s2" onClick={this.handleFormSubmit} >Submit</button>

            </div>
            </div>
        );
    }
}

export default TrendsForm;