import React, { Component } from "react";

// Page Dependencies
import AboutMeForm from "./AboutMeForm"
import BodyLocationForm from "./BodyLocationForm"
import SymptomsForm from "./SymptomsForm"


//Route Dependencies
import API from "../../../utils/API"

class Diagnosis extends Component {
   state = {
      /* About Me Page */
      AboutMe: true,
      firstName: "",
      lastName: "",
      birthYear: "",
      gender: "",

      /* Body Locations Page */
      locations: [],
      bodyLocationType: "General Body Locations",
      selLocation: "",
      BodyLocation: false,
      BodyGen: true,
   }

   handleInputChange = (event) => {
      this.setState({[event.target.name]: event.target.value })
      console.log(event.target.value)
   }

   handleSubmitForm = (event) => {
      event.preventDefault();

      //About Me  => Bodylocation(General)
      if (this.state.AboutMe) { //If About Me Form is Displayed
         //Pull General Body Locations From Api and Change Form
         API.getBodyGen()
            .then(res => {
               //Place Genera; Locations in Locations State
               this.setState({ locations: res.data })

               //Set BodyLocationsForm To True
               this.setState({ BodyLocation: true })

               //Set AboutMeForm to False to display BodyLocationsForm
               this.setState({ AboutMe: false })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

      //Bodylocation(General) => Bodylocation(Specific)
      else if (this.state.BodyLocation && this.state.BodyGen) {
         API.getBodySpec(this.state.selLocation)
            .then(res => {
               //Place Specific Locations in Locations State
               this.setState({ locations: res.data })

               //Set BodyGen To False (Specific Locations)
               this.setState({ BodyGen: false })
               this.setState({ bodyLocationType: "Specific Body Locations" })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

      //Bodylocation(Specific) => BodySymptoms
      else if (this.state.BodyLocation && !this.state.BodyGen) {
         API.getBodySpec(this.state.selLocation)
            .then(res => {
               //Set BodyGen To False (Specific Locations)
               this.setState({ BodyGen: false })

               //Place Specific Locations in Locations State
               this.setState({ locations: res.data })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

   }

   render() {
      if (this.state.AboutMe) {
         return (
            <AboutMeForm
               submitHandler={this.handleSubmitForm}
               handleInputChange={this.handleInputChange}
               firstName={this.state.firstName}
               lastName={this.state.lastName}
               birthYear={this.state.birthYear}
               gender={this.state.gender}
            />
         )
      } else if (this.state.BodyLocation) {
         return (
            <BodyLocationForm
               submitHandler={this.handleSubmitForm}
               handleInputChange={this.handleInputChange}
               locations={this.state.locations}
               genLocation={this.state.genLocation}
               bodyLocationType={this.state.bodyLocationType}
            />
         )
      } else if (this.state.Symptoms) {
         return (
            <BodyLocationForm
               submitHandler={this.handleSubmitForm}
               handleInputChange={this.handleInputChange}
               locations={this.state.locations}
               genLocation={this.state.genLocation}
               bodyLocationType={this.state.bodyLocationType}
            />
         )
      }

   }




}

export default Diagnosis;
