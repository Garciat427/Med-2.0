import axios from "axios";

export default {
 
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
}


};
