import React, { Component } from "react";
import { TextInput, Button } from 'react-materialize';

class AboutMeForm extends Component {
   render(){
      return (
         <form onSubmit = {this.props.submitHandler}>
            <div className="container">
               <div className="row">
                  <div className = "col s12">
                     <h1 className="center">About Me</h1>
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
                  />
                  {/* Last Name */}
                  <TextInput 
                     value = {this.props.lastName} 
                     onChange = {this.props.handleInputChange} 
                     name = "lastName" 
                     label="Last Name (Optional)"
                     s = {6} 
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
                     s = {6} 
                  />
                  {/* Gender */}
                  <div className="input-field col s6">
                     <select 
                        name = "gender" 
                        label="Gender (Required)"
                        value = {this.props.gender} 
                        onChange = {this.props.handleInputChange} 
                     >
                        <option selected disabled value="">Choose a Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="male">Other</option>
                     </select>
                     <label>Gender (Required)</label>
                  </div>
               </div>

               <div className="row">
                  <div className = "col s12">
                     <Button type="submit" 
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