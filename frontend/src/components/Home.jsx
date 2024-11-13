import Header from "./header/Header";
import BooksContainer from "./books/BooksContainer";
import AddBook from "./books/AddBook";

const Home = () => {
  return (
    <>
      <Header />
      <AddBook />
      <BooksContainer />
    </>
  );
};

export default Home;
