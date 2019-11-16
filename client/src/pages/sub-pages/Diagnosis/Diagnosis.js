import React, { Component } from "react";

// Page Dependencies
import AboutMeForm from "./AboutMeForm"
import BodyLocationForm from "./BodyLocationForm"
import SymptomsForm from "./SymptomsForm"
import DiagnoseSymptoms from "./DiagnoseSymptoms"


//Route Dependencies
import API from "../../../utils/API"

class Diagnosis extends Component {
   state = {
      /* About Me Page */
      AboutMeForm: true,
      firstName: "",
      lastName: "",
      birthYear: "",
      gender: "",

      /* Body Locations Page */
      locations: [],
      bodyLocationType: "General Body Locations",
      selLocation: "",
      BodyLocationForm: false,
      BodyGen: true,

      /* Symptoms Page */
      SymptomsForm: false,
      bodySymp: true,
      symptoms: [],
      symptomsSel: [],

      /* Diagnosis Page */
      DiagnosisForm: false,
      diagnosis: []
   }

   handleInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
      console.log(event.target.value)
   }
   handleSymptomsSelect = (event) => {
      console.log (event.target.value)
      let strSymptoms
      //If Get Diag Button was Pressed
      if (event.target.value === "GetDiag") {
      strSymptoms = JSON.stringify(this.state.symptomsSel)
      console.log("Test")
         //Get Diagnosis
         API.getDiagSel(this.state.gender, this.state.birthYear,
            strSymptoms)
            .then(res => {
               console.log(res.data)
               //Place new Symptoms in symptoms State
               this.setState({ diagnosis: res.data })
               //Set State of DiagnosisForm to True
               this.setState({ DiagnosisForm: true })
               //Set Symptoms Form to False to display DiagnoseSymptoms Page
               this.setState({ SymptomsForm: false })
            })
            .catch(err => console.log(err)); //Catch Errors 



      } else { //Select Symptoms Button
         //Collect Selected Symptoms
         let sympArr = this.state.symptomsSel
         sympArr.push(event.target.value)
         this.setState({ symptomsSel: sympArr })

         //Get New Proposed Symptoms
         strSymptoms = JSON.stringify(this.state.symptomsSel)
         console.log(strSymptoms)
         API.getSympSel(this.state.gender, this.state.birthYear,
            strSymptoms)
            .then(res => {
               //Place new Symptoms in symptoms State
               this.setState({ symptoms: res.data })
               console.log(this.state.symptoms)
            })
            .catch(err => console.log(err)); //Catch Errors 
      }
   }

   handleSubmitForm = (event) => {
      event.preventDefault();

      //About Me  => Bodylocation(General)
      if (this.state.AboutMeForm) { //If About Me Form is Displayed
         //Pull General Body Locations From Api and Change Form
         API.getBodyGen()
            .then(res => {
               //Place Genera; Locations in Locations State
               this.setState({ locations: res.data })

               //Set BodyLocationsForm To True
               this.setState({ BodyLocationForm: true })

               //Set AboutMeForm to False to display BodyLocationsForm
               this.setState({ AboutMeForm: false })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

      //Bodylocation(General) => Bodylocation(Specific)
      else if (this.state.BodyLocationForm && this.state.BodyGen) {
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
      else if (this.state.BodyLocationForm && !this.state.BodyGen) {
         API.getBodySymp(this.state.gender, this.state.birthYear, this.state.selLocation)
            .then(res => {
               //Place Specific Locations in Locations State
               this.setState({ symptoms: res.data })
               console.log(this.state.symptoms)

               //Set SymptomsForm To True
               this.setState({ SymptomsForm: true })

               //Set BodyLocationsForm to False to display SymptomsForm
               this.setState({ BodyLocationForm: false })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

      //BodySymptoms => DiagForm
      else if (this.state.SymptomsForm) {
         API.getBodySymp(this.state.gender, this.state.birthYear, this.state.selLocation)
            .then(res => {
               //Place Specific Locations in Locations State
               this.setState({ symptoms: res.data })
               console.log(this.state.symptoms)

               //Set SymptomsForm To True
               this.setState({ SymptomsForm: true })

               //Set BodyLocationsForm to False to display SymptomsForm
               this.setState({ BodyLocationForm: false })
            })
            .catch(err => console.log(err)); //Catch Errors 
      }

   }

   render() {
      if (this.state.AboutMeForm) {
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
      } else if (this.state.BodyLocationForm) {
         return (
            <BodyLocationForm
               submitHandler={this.handleSubmitForm}
               handleInputChange={this.handleInputChange}
               locations={this.state.locations}
               genLocation={this.state.genLocation}
               bodyLocationType={this.state.bodyLocationType}
            />
         )
      } else if (this.state.SymptomsForm) {
         return (
            <SymptomsForm
               submitHandler={this.handleSubmitForm}
               handleSymptomsSelect={this.handleSymptomsSelect}
               symptoms={this.state.symptoms}
            />
         )
      } else if (this.state.DiagnosisForm) {
         return (
            <DiagnoseSymptoms
               submitHandler={this.handleSubmitForm}
               handleSymptomsSelect={this.handleSymptomsSelect}
               diagnosis={this.state.diagnosis}
            />
         )
      }

   }





}

export default Diagnosis;
