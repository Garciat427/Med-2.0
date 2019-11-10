/* eslint-disable camelcase */
require("dotenv").config();

var unirest = require("unirest");
var rapidapiKey = process.env.RapidAPIKey;
var Handlebars = require("handlebars");
var tempObj = {};

const reqUrl = {
  bodyLoc:"https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations", //For Req 1 + 2 (Find Body Location Gen + Specific)
  bodySymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/", //Req 3 (Find Symptoms Based On Body Location)
  propSymp: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed", // Req 4 + 5 + 6 (Find Symptoms Based Previous Symptoms)
}

//Handlebars function to set index start to 1
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

function medApiReq (reqType, reqUrl, params, headers){ //string, string, object, object
  axios({
    method: reqType,
    url: reqUrl,
    params: params,
    headers: headers,
  }) .then(function (res) {
    return (res.data);
  });
}

module.exports = function(app) {
  
  //-------------Get Body Locations (General)------------- Req 1
  app.get("/getBodyGen", function(req, res) {
    axios({
      method: 'get',
      url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations',
      params: {
        language: "en-gb"
      },
      headers: {
        "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
        "x-rapidapi-key": rapidapiKey
      },
    }) .then(function (response) {
      console.log(response.data);
    });
  });

  //-------------Get Body Locations (Sub Locations)------------- req 2
  app.post("/getBodySpecific/post", function(req, res) {
    var bodyGen = req.body.bodyGen;
    var URL =
      "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/" +
      bodyGen;
    var unirestReq = unirest("GET", URL);

    unirestReq.query({
      language: "en-gb"
    });

    unirestReq.headers({
      "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key": rapidapiKey
    });

    unirestReq.end(function(unirestRes) {
      if (unirestRes.error) {
        throw new Error(unirestRes.error);
      }
      tempObj = {
        locations: unirestRes.body
      };
      res.json({ id: 200 });
    });
  });

  //HTML Route to render Page with new info
  app.get("/getBodySpecific", function(req, res) {
    res.render("bodySpecific", tempObj);
  });

  //-------------Get Symptoms In Body Location-------------  req 3
  app.post("/getBodySymptoms/post", function(req, res) {
    console.log(req.body);
    var bodySpec = req.body.bodySpec;
    var userGender = "man"; //req.body.userGender;
    console.log(bodySpec + userGender);
    var url1 =
      "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/" +
      bodySpec +
      "/" +
      userGender;
    console.log(url1);
    var unirestReq = unirest("GET", url1);

    unirestReq.query({
      language: "en-gb"
    });

    unirestReq.headers({
      "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key": "392e514bc5mshf76ed8b87ea0f07p1a1f82jsn203533661587"
    });

    unirestReq.end(function(unirestRes) {
      if (unirestRes.error) {
        throw new Error(unirestRes.error);
      }
      tempObj = {
        symptoms: unirestRes.body
      };
      res.json({ id: 200 });
    });
  });

  //HTML Route to render Page with new info
  app.get("/getBodySymptoms", function(req, res) {
    res.render("bodySymptoms", tempObj);
  });

  //-------------Get Proposed Symptoms------------- req 4
  app.post("/getProposedSymptoms/post", function(req, res) {
    var user = {
      symptoms: req.body.symptoms,
      gender: req.body.gender,
      birthYear: req.body.birthYear
    };

    var unirestReq = unirest(
      "GET",
      "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/proposed"
    );

    unirestReq.query({
      symptoms: user.symptoms,
      gender: user.gender,
      year_of_birth: user.birthYear,
      language: "en-gb"
    });

    unirestReq.headers({
      "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key": rapidapiKey
    });

    unirestReq.end(function(unirestRes) {
      if (unirestRes.error) {
        throw new Error(unirestRes.error);
      }
      tempObj = {
        symptoms: unirestRes.body
      };
      res.json({ id: 200 });
    });
  });
  app.get("/getProposedSymptoms", function(req, res) {
    res.render("proposedSymptoms", tempObj);
  });

  //Get Diagnosis
  app.post("/getDiag/post", function(req, res) {
    var unirestReq = unirest(
      "GET",
      "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis"
    );

    var user = {
      symptoms: req.body.symptoms,
      gender: req.body.gender,
      birthYear: req.body.birthYear
    };

    unirestReq.query({
      symptoms: user.symptoms,
      gender: user.gender,
      year_of_birth: user.birthYear,
      language: "en-gb"
    });

    unirestReq.headers({
      "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key": "392e514bc5mshf76ed8b87ea0f07p1a1f82jsn203533661587"
    });

    unirestReq.end(function(unirestRes) {
      if (unirestRes.error) {
        throw new Error(unirestRes.error);
      }
      tempObj = {
        diagnosis: unirestRes.body
      };
      res.json({ id: 200 });
      console.log(unirestRes.body);
    });
  });
  app.get("/getDiag", function(req, res) {
    res.render("diagPage", tempObj);
  });
};
