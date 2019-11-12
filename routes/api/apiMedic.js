const router = require("express").Router();
const apiMedicController = require("../../controllers/apiMedicController");

// Matches with "/api/apiMedic

// Req 1 - Get Body Locations General
router
  .route("/bodyLoc")
  .get(apiMedicController.bodyLocGeneral);

// Req 2 - Get Body Locations Specific
router
  .route("/bodyLoc/:id")
  .get(apiMedicController.bodyLocSpecific);

// Req 3 - Get Symptoms of Body Location
router
  .route("/bodySymp/:id/:gender")
  .get(apiMedicController.bodySymp);

// Req 4 + (5 + 6) Get Symptoms based on Previous Symptom(s)
router
  .route("/sympSel/:id/:gender")
  .get(apiMedicController.bodySymp);



module.exports = router;