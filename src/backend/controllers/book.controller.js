const Book = require("../models/book.model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const createNewBook = async (req, res) => {
  try {
    const { title } = req.body;
    const bookObj = { title };
    const newBook = await Book.create(bookObj);
    res.status(200).send(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      { title, updatedAt: Date.now() },
      { new: true }
    );
    res.send(updatedBook);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.send();
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

module.exports = { getAllBooks, createNewBook, updateBook, deleteBook };
