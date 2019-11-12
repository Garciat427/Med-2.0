const router = require("express").Router();
const apiMedicController = require("../../controllers/apiMedicController");

// Req 1 - Body Location General
// Matches with "/api/apiMedic/bodyLoc"
router
  .route("/bodyLoc")
  .get(apiMedicController.bodyLocGeneral);

// Req 2 - Body Location Specific
// Matches with "/api/apiMedic/bodyLoc"
router
  .route("/bodyLoc/:id")
  .get(apiMedicController.bodyLocSpecific);



module.exports = router;