import React, { Component } from "react";

// Page Dependencies
import AboutMe from "./AboutMe"

class Diagnosis extends Component {
   state = {
      /* About Me Page */
      AboutMe : true,
      firstName : "",
      lastName : "",
      birthYear : "",
      gender : "",

      /* About Me Page */
      
   }

  handleInputChange = (event) => {
     this.setState({[event.target.name]: event.target.value})
     //console.log(this.state.firstName);
     console.log(this.state.lastName);
  }

  handleSubmitForm = (event) => {
      event.preventDefault();
      console.log(event);
  }

   render(){
      if (this.state.AboutMe){
         return( 
            <AboutMe 
               submitHandler = {this.handleSubmitForm}
               handleInputChange = {this.handleInputChange}
               firstName = {this.state.firstName}
               lastName = {this.state.lastName}
            /> )
      }
      
   }
   
   

   
}

export default Diagnosis;
