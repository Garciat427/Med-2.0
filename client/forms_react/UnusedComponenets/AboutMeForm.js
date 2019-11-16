import React , { Component } from "react";
import { TextInput } from 'react-materialize';

class AboutMeForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstName: '',
         lastName: '',
         birthYear: '',
         gender: ''
      };
      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastNameChange = this.lastNameChange.bind(this);
      this.birthYearChange = this.birthYearChange.bind(this);
      this.genderChange = this.genderChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   //Event Handlers

   /* ------------- About Me Form ------------- */
   firstNameChange(event) {
      this.setState({ firstName: event.target.value });
   }
   /* //Gender Select Change
   lastNameChange(event) {
      this.setState({ lastName: event.target.value });
   }
   //Birth Year Change
   birthYearChange(event) {
      this.setState({ birthYear: event.target.value });
   }
   //Gender Select Change
   genderChange(event) {
      this.setState({ gender: event.target.value });
   }
    */
   //Submit Form Event
   handleSubmit(event) {
      event.preventDefault();
      console.log("Test")
      //event.preventDefault();
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <h1>Diagnosis Form 1</h1>
                  
                     <AboutMeForm
                        

                        firstNameValue={this.state.firstNameValue}
                        firstNameChange={this.firstNameChange}
                        handleSubmit = {this.handleSubmit}



                        //handleSubmit = {this.handleSubmit}
                        /* lastNameValue={this.state.lastNameChange}
                        birthYearValue={this.state.birthYearChange}
                        genderValue={this.state.genderChange} */
                     />
                  
               </div>
            </div>
         </div>
                  )
   }



   render (props){ 
    return (
      <form className="col s12" onSubmit={this.props.handleSubmit}>
            <div className="container">
               <div className="row">
                  <div className="input-field col s12">
                     <input 
                        value ={this.props.firstNameValue} 
                        onChange={this.props.firstNameChange} 
                        placeholder="John" 
                        id="first_name" 
                        type="text" 
                        className="validate"
                     ></input>
                     <label htmlFor="first_name">First Name (Optional)</label>
                  </div>

                  <button type="submit">Submit</button>
                  {/* <div className="input-field col s6">
                     <input value = {this.props.lastNameValue} onChange={this.lastNameChange} placeholder="Doe" id="last_name" type="text" className="validate"></input>
                     <label htmlFor="last_name">Last Name (Optional)</label>
                  </div>

               </div>
               <div className="row">
                  
                  <div className="input-field col s6">
                     <input 
                        value = {this.props.birthYearValue}
                        placeholder="YYYY" 
                        id="first_name" 
                        type="number" 
                        className="validate"
                        onChange={this.birthYearChange}
                     ></input>
                     <label htmlFor="first_name">Year of Birth</label>
                  </div>

                  <div className="input-field col s6">
                  <select 
                     value = {this.props.birthYearValue}
                     onChange={this.genderChange}
                  > 
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="male">Other</option>
                  </select>
                  <label>Gender</label>
                  </div> */}

               
               </div>
            </div>
         </form>
        )
    }

}

export default AboutMeForm;
