import React, { useState } from "react";
import useAddBook from "../../hooks/useAddBook";
import styles from "./Books.module.css";

const AddBook = () => {
  const { addBook } = useAddBook();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object
    const newBook = {
      title,
      author,
      publishedDate,
      description,
    };

    // Add book to context
    addBook(newBook);

    // Clear form inputs
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setDescription("");
  };

  return (
    <div className={styles.add_book}>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Book</h2>
        <div className={styles.form_group}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label>Year:</label>
          <input
            type="number"
            min="1"
            value={publishedDate}
            onChange={(e) => setPublishedDate(+e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label>description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
