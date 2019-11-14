import React, { Component } from "react";

class Diagnosis extends Component { 
   constructor(props) {
      super(props);
      this.state = {
         firstName: '',
         lastName:'',
         birthYear:'',
         gender: ''
      };
      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastNameChange = this.lastNameChange.bind(this);
      this.birthYearChange = this.birthYearChange.bind(this);
      this.genderChange = this.genderChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

   //Event Handlers

   //Gender Select Change
   firstNameChange(event) {
      this.setState({firstName: event.target.value});
   }

   //Gender Select Change
   lastNameChange(event) {
      this.setState({lastName: event.target.value});
   }
   
   //Birth Year Change
   birthYearChange(event) {
      this.setState({birthYear: event.target.value});
   }

   //Gender Select Change
   genderChange(event) {
      this.setState({gender: event.target.value});
   }

   //Submit Form Event
   handleSubmit(event) {
      console.log(this.state.firstName)
      event.preventDefault();
   }

  render (){ 
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Diagnosis Form 1</h1>
            <form className="col s12" onSubmit={this.handleSubmit}>

               <div className="row">
                  
                  <div className="input-field col s6">
                     <input onChange={this.firstNameChange} placeholder="John" id="first_name" type="text" className="validate"></input>
                     <label htmlFor="first_name">First Name (Optional)</label>
                  </div>

                  <div className="input-field col s6">
                     <input onChange={this.lastNameChange} placeholder="Doe" id="last_name" type="text" className="validate"></input>
                     <label htmlFor="last_name">Last Name (Optional)</label>
                  </div>

               </div>
               <div className="row">
                  
                  <div className="input-field col s6">
                     <input 
                        placeholder="YYYY" 
                        id="first_name" 
                        type="number" 
                        className="validate"
                        onChange={this.birthYearChange}
                     ></input>
                     <label htmlFor="first_name">Year of Birth</label>
                  </div>

                  <div className="input-field col s6">
                  <select value={this.state.gender} onChange={this.genderChange}> 
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="male">Other</option>
                  </select>
                  <label>Gender</label>
                  </div>
                  <button type="submit">Submit</button>

               </div>

            </form>
          </div>   
        </div>
      </div>
        )
    }

}

export default Diagnosis;
