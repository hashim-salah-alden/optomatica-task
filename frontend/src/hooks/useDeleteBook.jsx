import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import toast from "react-hot-toast";

const useDeleteBook = () => {
  const { books, setBooks, setTotalPages, booksPerPage } =
    useContext(BooksContext);

  const deleteBook = async (bookId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/books/${bookId}/delete`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to delete books");
      }
      setBooks(books.filter((book) => book._id !== bookId));

      // Update pagination if necessary
      setTotalPages(Math.ceil(books.length / booksPerPage));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { deleteBook };
};

export default useDeleteBook;
