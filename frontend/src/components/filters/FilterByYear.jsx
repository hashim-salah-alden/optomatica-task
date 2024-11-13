// FilterBooks.js
import React, { useContext } from "react";
import styles from "./filters.module.css";
import { BooksContext } from "../../context/BooksContext";

const FilterBooks = () => {
  const { allBooks, setYear, year } = useContext(BooksContext);

  // Generate unique years for the dropdown options
  const years = [...new Set(allBooks.map((book) => book.publishedDate))];

  // Filter books by the selected year
  // const filteredBooks = selectedYear
  //   ? books.filter((book) => book.year === parseInt(selectedYear))
  //   : books;

  // Handle the dropdown change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className={styles.filter_books}>
      <select id="year-select" value={year} onChange={handleYearChange}>
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBooks;
