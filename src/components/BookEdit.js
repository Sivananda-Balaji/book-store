import React, { useState } from "react";

const BookEdit = ({ book, onEdit, onSave }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(book.id, title);
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
