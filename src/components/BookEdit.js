import React, { useContext, useState } from "react";
import booksContext from "../context/books";

const BookEdit = ({ book, onSave }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(booksContext);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book._id, title);
    onSave();
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} required />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
