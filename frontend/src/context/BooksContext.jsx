import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const booksPerPage = 12;

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        allBooks,
        setAllBooks,
        totalPages,
        setTotalPages,
        booksPerPage,
        currentPage,
        setCurrentPage,
        title,
        setTitle,
        year,
        setYear,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
