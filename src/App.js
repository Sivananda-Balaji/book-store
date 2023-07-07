import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import booksContext from "./context/books";

function App() {
  const { getBooks } = useContext(booksContext);
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  return (
    <div className="app">
      <BookCreate />
      <h1>Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
