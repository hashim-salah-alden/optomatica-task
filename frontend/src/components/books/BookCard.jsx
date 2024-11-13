import styles from "./Books.module.css";
import useDeleteBook from "../../hooks/useDeleteBook";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

const BookCard = () => {
  const { deleteBook } = useDeleteBook();
  const { books } = useContext(BooksContext);

  return (
    <>
      {books.map((book, indx) => (
        <div className={styles.book_card} key={indx}>
          <div className={styles.book_header}>
            <h4 className={styles.book_title}>{book.title}</h4>
            <span className={styles.book_year}>{book.publishedDate}</span>
          </div>
          <p className={styles.book_description}>{book.description}</p>
          <p className={styles.book_author}>{book.author}</p>
          <button
            className={styles.book_deleteButton}
            onClick={() => deleteBook(book._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default BookCard;
