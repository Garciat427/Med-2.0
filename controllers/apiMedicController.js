/* eslint-disable camelcase */
//require("dotenv").config();
const axios = require('axios');

const apiMedicUrl = {
  //For Req 1 + 2 (Find Body Location Gen + Specific)
  bodyLoc:"https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations",

  //Req 3 (Find Symptoms Based On Body Location)
  bodySymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms",

  // Req 4 + 5 + 6 (Find Symptoms Based Previous Symptoms)
  propSymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed"
}

const headers = {
  "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
  "x-rapidapi-key": "99a794a1b2msh418e261da3bc802p188864jsn1fd4fddc6a5f"
};



module.exports = {
  // Req 1 - Get Body Locations (General)
  bodyLocGeneral : (req, res) => {
    //Request Config
    reqUrl = apiMedicUrl.bodyLoc;
    reqConfig = {
      params : {"language": "en-gb"},
      headers : headers
    }
    //Axios Request
    axios
      .get(reqUrl, reqConfig)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err))
  },
  
  // Req 2 - Get Body Locations (Specific)
  bodyLocSpecific : (req, res) => {
    //Request Config
    reqUrl = apiMedicUrl.bodyLoc + "/" + req.params.id;
    reqConfig = {
      params : {"language": "en-gb"},
      headers : headers
    }
    //Axios Request
    axios
      .get(reqUrl, reqConfig)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err))
  },
  
  // Req 3 - Get Symptoms based on Body Location (Specific)
  bodySymp : (req, res) => {
    //Request Config
    reqUrl = apiMedicUrl.propSymp;
    reqConfig = {
      params : {
        "symptoms": "[234,11]",
	      "gender": "male",
	      "year_of_birth": "1984",
        "language": "en-gb"
      },
      headers : headers
    }
    //Axios Request
    axios
      .get(reqUrl, reqConfig)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err))
  },

  // Req 4 + (5 + 6) Get Symptoms based on Previous Symptom(s)
  sympSel : (req, res) => {
    //Request Config
    reqUrl = apiMedicUrl.bodySymp + "/" + req.params.id + "/" + req.params.gender;
    reqConfig = {
      params : {"language": "en-gb"},
      headers : headers
    }
    //Axios Request
    axios
      .get(reqUrl, reqConfig)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err))
  }
}
