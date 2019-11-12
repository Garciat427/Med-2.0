/* eslint-disable camelcase */
//require("dotenv").config();
const axios = require('axios');

const apiMedicUrl = {
  bodyLoc:"https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/", //For Req 1 + 2 (Find Body Location Gen + Specific)
  bodySymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/", //Req 3 (Find Symptoms Based On Body Location)
  propSymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed", // Req 4 + 5 + 6 (Find Symptoms Based Previous Symptoms)
}

const headers = {
  "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
  "x-rapidapi-key": "99a794a1b2msh418e261da3bc802p188864jsn1fd4fddc6a5f"
};



module.exports = {
  //Req 1 - Body Locations (General)
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
  //Req 2 - Body Locations (General)
  bodyLocSpecific : (req, res) => {
    //Request Config
    reqUrl = apiMedicUrl.bodyLoc + req.params.id;
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
