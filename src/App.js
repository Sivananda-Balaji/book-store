import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const filteredBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(filteredBooks);
  };
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 99999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
