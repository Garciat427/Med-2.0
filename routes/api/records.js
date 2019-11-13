const router = require("express").Router();
const recordController = require("../../controllers/recordController");

// Matches with "/api/books"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);


router
  .route("/allCities/")
  .get(recordController.getAllCities);

module.exports = router;
