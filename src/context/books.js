import { createContext, useState, useCallback } from "react";
import axios from "axios";

const booksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = useCallback(async () => {
    const results = await axios.get("http://localhost:8000/api/v1/books");
    setBooks(results.data);
  }, []);
  const editBookById = async (id, newTitle) => {
    const updatedBook = await axios.put(
      `http://localhost:8000/api/v1/books/${id}`,
      {
        title: newTitle,
      }
    );
    const updatedBooks = books.map((book) => {
      return book._id === id ? { ...book, ...updatedBook.data } : book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/books/${id}`);
    const filteredBooks = books.filter((book) => {
      return book._id !== id;
    });
    setBooks(filteredBooks);
  };

  const createBook = async (title) => {
    const newBook = await axios.post("http://localhost:8000/api/v1/books", {
      title,
    });
    const updatedBooks = [...books, newBook.data];
    setBooks(updatedBooks);
  };
  const valuesToShare = {
    books,
    createBook,
    editBookById,
    deleteBookById,
    getBooks,
  };

  return (
    <booksContext.Provider value={valuesToShare}>
      {children}
    </booksContext.Provider>
  );
};

export { Provider };
export default booksContext;
