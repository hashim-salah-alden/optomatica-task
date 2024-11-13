import { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import toast from "react-hot-toast";

const useAddBook = () => {
  const [loading, setLoading] = useState(false);
  const { books, setBooks, setTotalPages, booksPerPage, setAllBooks } =
    useContext(BooksContext);

  const addBook = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to add book");
      }
      setBooks([...books, data]);
      setAllBooks([...books, data]);
      setTotalPages(Math.ceil(books.length / +booksPerPage));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { addBook, loading };
};

export default useAddBook;
