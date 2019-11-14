const router = require("express").Router();
const recordController = require("../../controllers/recordController");

// Matches with "/api/record/"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);

router
  .route("/distinct-cities/")
  .get(recordController.getDistinctCities);


module.exports = router;
