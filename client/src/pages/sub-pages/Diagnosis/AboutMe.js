import React, { Component } from "react";
import { TextInput, Button } from 'react-materialize';

class AboutMe extends Component {

   render(){
      return (
         <form onSubmit = {this.props.submitHandler}>
            <div className="container">

               <div className="row">
                  <TextInput 
                     value = {this.props.firstName} 
                     onChange = {this.props.handleInputChange} 
                     name = "firstName" 
                     label="First Name (Optional)"
                     s = {6} 
                  />
                  <TextInput 
                     value = {this.props.lastName} 
                     onChange = {this.props.handleInputChange} 
                     name = "lastName" 
                     label="Last Name (Optional)"
                     s = {6} 
                  />
                  
               </div>
               
               <div className="row">
                  <TextInput 
                     value = {this.props.firstName} 
                     onChange = {this.props.handleInputChange} 
                     name = "firstName" 
                     label="Birth Year (Required)"
                     type = "number"
                     s = {6} 
                  />
                  <TextInput 
                     value = {this.props.lastName} 
                     onChange = {this.props.handleInputChange} 
                     name = "lastName" 
                     label="Last Name (Optional)"
                     s = {6} 
                  />
               </div>
               <Button type="submit" waves="light" style={{marginRight: '5px'}}>
                     button
                  </Button>
            </div>
         </form>
       ) 
    }    
 }

 export default AboutMe;