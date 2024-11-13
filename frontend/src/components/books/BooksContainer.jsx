import { useContext } from "react";
import Search from "../filters/Search";
import FilterByYear from "../filters/FilterByYear";
import BookCard from "./BookCard";
import Pagination from "./Pagintaion";
import styles from "./Books.module.css";

import { BooksContext } from "../../context/BooksContext";

import useGetBooks from "../../hooks/useGetBooks";

const BooksContainer = () => {
  const { loading } = useGetBooks();
  const { totalPages, currentPage, setCurrentPage } = useContext(BooksContext);

  if (loading) return <p>Loading....</p>;

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Search />
        <FilterByYear />
      </div>
      <div className={styles.books_container}>
        <BookCard />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BooksContainer;
