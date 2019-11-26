import React, { Component } from "react";
import { TextInput, Button } from 'react-materialize';

class AboutMeForm extends Component {
   render(){
      return (
         <form onSubmit = {this.props.submitHandler}>
            <div className="container">
               <div className="row">
                  <div className = "col s12">
                     <h3 className="center">About Me</h3>
                     <p className="center">Tell us about your self! We mainly need this information to provide a more accurate diagnosis later!
                     </p>
                  </div>
               </div>

               <div className="row">
                  {/* First Name */}
                  <TextInput 
                     value = {this.props.firstName} 
                     onChange = {this.props.handleInputChange} 
                     name = "firstName" 
                     label="First Name (Optional)"
                     s = {6} 
                     validate = {true}
                  />
                  {/* Last Name */}
                  <TextInput 
                     value = {this.props.lastName} 
                     onChange = {this.props.handleInputChange} 
                     name = "lastName" 
                     label="Last Name (Optional)"
                     s = {6} 
                     validate = {true}
                  />
               </div>
               
               <div className="row">
                  {/* Birth Year */}
                  <TextInput 
                     value = {this.props.birthYear} 
                     onChange = {this.props.handleInputChange} 
                     name = "birthYear" 
                     label="Birth Year (Required)"
                     type = "number"
                     validate = {true}
                     s = {6} 
                  />
                  {/* Gender */}
                  <div className="input-field col s6">
                     <select 
                        name = "gender" 
                        label="Gender (Required)"
                        defaultValue="Choose a Gender"
                        onChange = {this.props.handleInputChange} 
                        validate = {"true"}
                        className="textColor"
                     >
                        <option disabled>Choose a Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="male">Other</option>
                     </select>
                     <label>Gender (Required)</label>
                  </div>
               </div>

               <div className="row">
                  {/* Location */}
                  <span 
                  className="btn-floating btn-large waves-effect waves-light deep-purple lighten-1"
                  onClick={this.props.findLocation}
                  >
                     <i class="far fa-compass"></i>
                  </span>
                  <TextInput 
                     value = {this.props.city} 
                     onChange = {this.props.handleInputChange} 
                     name = "currentLoc" 
                     label="Location"
                     validate = {true}
                     s = {11} 
                  />
               </div>

               <div className="row">
                  <div className = "col s12 center">
                     <Button 
                     className= "deep-purple lighten-1 hoverable"
                     disabled={!(this.props.gender && this.props.birthYear && this.props.city)}
                     type="submit" 
                     waves="light" 
                     style={{marginRight: '5px'}}>
                        Submit
                     </Button>
                  </div>
               </div>
               
            </div>
         </form>
       ) 
    }    
 }

 export default AboutMeForm;