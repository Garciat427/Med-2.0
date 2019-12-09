const router = require("express").Router();
const diagnosisController = require("../../controllers/diagnosisController");


// Matches with "/api/diagnosis"
router.route("/")
  .get(diagnosisController.findAll)
  .post(diagnosisController.create);

// Matches with "/api/diagnosis/city/mississauga/weeks-back/1/is-primary/1". 
// Example: In this above commented example, this will return all diagnosis in the city of Mississauga in the past 1 week showing primary data.
//    city/:name is the city name
//    weeks-back/:weeks is the number of weeks from now 
//    is-primary/:isPrimary is either 0 or 1 to show primary diagnosis based on highest accuracy vs all diagnosis.
router
  .route("/city/:name/weeks-back/:weeks/is-primary/:isPrimary")
  .get(diagnosisController.findAll_DiagnosisInCityInPastWeeks);

// if name is 'all', then this will return all cities.
router
  .route("/cityDiagnosisRatio/:cityName/diagnosisName/:diagnosisName/days-back/:days")
  .get(diagnosisController.findAll_DiagnosisInCityInPastDaysRatio);

router
  .route("/distinct-diagnosis/")
  .get(diagnosisController.getDistinctDiagnosis);


router
  .route("/path/name/:name/days/:days")
  .get(diagnosisController.getDiagnosisPath);



module.exports = router;
