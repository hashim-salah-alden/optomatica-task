import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>Book Store</div>
      </div>
    </header>
  );
};

export default Header;
