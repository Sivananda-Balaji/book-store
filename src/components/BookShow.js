import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import booksContext from "../context/books";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(booksContext);
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const editSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSave={editSubmit} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
