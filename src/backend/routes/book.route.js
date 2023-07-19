const express = require("express");
const {
  getAllBooks,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const router = express.Router();

router.route("/").get(getAllBooks).post(createNewBook);
router.route("/:id").put(updateBook).delete(deleteBook);

module.exports = router;
