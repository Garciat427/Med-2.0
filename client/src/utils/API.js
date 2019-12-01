import axios from "axios";

export default {


  /**************************************************************************** */
  /***************************  Med lookup APIs Below ***************************** */
  /**************************************************************************** */

  getDistinctDiagnosis: () => {
    return axios.get("/api/diagnosis/distinct-diagnosis");

  },

  getDistinctCities: () => {
    return axios.get("/api/records/distinct-cities");

  },

  /**************************************************************************** */
  /***************************  Med DB APIs Below ***************************** */
  /**************************************************************************** */

  /* SAVING: the following API can be used to save a record. The following is an example of a complicated input with multiple symptoms and multipl diagnosis
      {
        "type": {"birthYear": 1988, "gender": "male"},
        "city": "niagara",
        "latitude": "333",
        "longitude": "777",
        "symptoms": [{"id": 5, "name":"sneeze"}, {"id": 27, "name":"headach"}],
        "diagnosis": [{"id": 70, "name":"bug flu2", "accuracy": 70}, {"id": 22, "name":"cold2", "accuracy": 30}]
      }
      */
  saveRecords: function (recordSymptomDiagnosisData) {
    return axios.post("/api/records", recordSymptomDiagnosisData);

  },

  /* PIE CHART: the following API calls can be used for Pie Chart. Example response
    [
      {
          "city": "NIAGARA",
          "name": "bug flu",
          "total": 2,
          "percentage": "100.00"
      }
    ]
    */
  getAllPrimaryDiagnosisInCityInPastWeekPercentage: function (cityName) {
    return axios.get("api/diagnosis/cityDiagnosisRatio/" + cityName + "/weeks-back/1");
  },


  /* TRENDS DATA: the following API calls can be used for trends page. Example response
    [
      {
          "latitude": "333",
          "longitude": "777",
          "city": "HAMILTON",
          "name": "cancer2"
      }
    ]
  */
  getAllPrimaryDiagnosisInCityInPastWeek: function (cityName) {
    return axios.get("api/diagnosis/city/" + cityName + "/weeks-back/1/is-primary/1");
  },

  getAllDiagnosisInCityInPastWeek: function (cityName) {
    return axios.get("api/diagnosis/city/" + cityName + "/weeks-back/1/is-primary/0");
  },

  getAllPrimaryDiagnosisInCityInPast4Weeks: function (cityName) {
    return axios.get("api/diagnosis/city/" + cityName + "/weeks-back/4/is-primary/1");
  },

  /* GET ALL records raw data without diagnosis or symptoms. The following is a sample output
  [
    {
      "id": 1,
      "age": 31,
      "gender": "M",
      "city": "OAKVILLE",
      "latitude": "333",
      "longitude": "777",
      "createdAt": "2019-11-11T05:03:18.000Z",
      "updatedAt": "2019-11-11T05:03:18.000Z"
    }
  ]
*/
  getAllRecords: function () {
    return axios.get("/api/records");
  },

  
  /**************************************************************************** */
  /*************************** API Medic Calls Below  ***************************** */
  /**************************************************************************** */

  //*************************** Req 1 + 2 - Body Locations ***************************
  
  //Req 1 - Get General Body Locations
  getBodyGen: () => {
    return axios.get("/api/apiMedic/bodyLoc");
  },

  //Req 2 - Get Specific Body Locations
  getBodySpec: (id) => {
    console.log(id)
    return axios.get("/api/apiMedic/bodyLoc/" + id);
  },

  /*  
    id = Type: Int 
      Represents the id for the general body location selected
      ex: "16" -> Abdomen, pelvis & buttocks

    Example reqUrl: /api/apiMedic/bodyLoc/16
  */ 


//*************************** Req 3 + 4 + n - Symptoms ***************************

  //Req 3 - Get Symptoms based on Specific Body Location
  getBodySymp: (gender, birthYear, id) => {
    return axios.get("/api/apiMedic/bodySymp/" + gender + "/" + birthYear + "/"+ id);
  },

  //Req 4 + n - Get Symptoms based on previous symptoms
  getSympSel: (gender, birthYear, symptoms) => {
    return axios.get("/api/apiMedic/sympSel/" + gender + "/" + birthYear + "/"+ symptoms);
  },

  /*  
    gender = Type: String 
      Represents Gender of User (For Diagnosis purposes)
      Possible Cases: "Male" , "Female"

    birthYear = Type: Int 
      Represents the User's Birth Year (For Diagnosis purposes) - Used to find the age of the User
      ex: "1998" 
      
    id = Type: Int 
      Represents the id for the specific body location selected
      ex: "33" -> Back

    symptoms = Type: Int Array => Stringified 
      An Int Array of symptom ID's (Ints). The array must be stringified then passed in the url
      ex: [10, 50] => Stringified => "[10, 50]"

    Example req3Url: /api/apiMedic/bodySymp/male/1990/33
    Example req4+nUrl: /api/apiMedic/sympSel/male/1990/[10, 50]
  */

 getDiagSel: () => {
  return axios.get("/diagSel/:gender/:birthYear/:symptoms");
},

};
