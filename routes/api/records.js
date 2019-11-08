const router = require("express").Router();
const recordController = require("../../controllers/recordController");

// Matches with "/api/books"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
