import React, { useState } from "react";
import styles from "./filters.module.css";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

const Search = () => {
  const { title, setTitle, totalPages, setTotalPages, booksPerPage, books } =
    useContext(BooksContext);
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        type="search"
        id="site-search"
        name="search"
        autoComplete="off"
        onChange={(e) => onChangeHandler(e)}
      />

      <button onClick={() => setTitle(searchText)}>
        {title && !searchText ? "Clear Search " : "Search"}
      </button>
    </div>
  );
};

export default Search;
