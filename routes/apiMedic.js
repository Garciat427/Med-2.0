/* eslint-disable camelcase */
require("dotenv").config();

var rapidapiKey = process.env.RapidAPIKey;
var tempObj = {};

const apiMedicUrl = {
  bodyLoc:"https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations", //For Req 1 + 2 (Find Body Location Gen + Specific)
  bodySymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/", //Req 3 (Find Symptoms Based On Body Location)
  propSymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed", // Req 4 + 5 + 6 (Find Symptoms Based Previous Symptoms)
}

module.exports = {
  medApiReq : (reqType, reqUrl, params, headers) => { //string, string, object, object
    axios({
      method: reqType,          //Get,Post
      url: reqUrl,              //apiMedicUrl
      params: params,           //Language and such
      headers: headers,         //RapidAPiKeys
    }) .then(function (res) {
      return (res.data);        //Return data from api
    });
  }
}
