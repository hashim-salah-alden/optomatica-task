import { useEffect, useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import toast from "react-hot-toast";

const useGetBooks = () => {
  const {
    setBooks,
    setAllBooks,
    totalPages,
    setTotalPages,
    booksPerPage,
    currentPage,
    setCurrentPage,
    title,
    year,
  } = useContext(BooksContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/api/books?title=${title}&year=${year}&limit=${booksPerPage}&page=${currentPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch books");
        }
        setBooks(data.books);
        setAllBooks(data.allBooks);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
        return data;
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [setBooks, title, year, currentPage, totalPages, setTotalPages]);

  return {
    loading,
  };
};

export default useGetBooks;
