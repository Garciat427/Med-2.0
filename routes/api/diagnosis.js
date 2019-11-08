const router = require("express").Router();
const diagnosisController = require("../../controllers/diagnosisController");

// Matches with "/api/books"
router.route("/")
  .get(diagnosisController.findAll)
  .post(diagnosisController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
