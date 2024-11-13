import styles from "./Books.module.css";
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`${styles.pagination_page} ${i === currentPage ? styles.pagination_active : ""}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        className={styles.pagination_button}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className={styles.pagination_button}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
