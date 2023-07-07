import React, { useContext, useState } from "react";
import booksContext from "../context/books";

const BookCreate = () => {
  const { createBook } = useContext(booksContext);
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input"
          required
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
