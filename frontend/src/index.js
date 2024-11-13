import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BooksProvider } from "./context/BooksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BooksProvider>
    <App />
  </BooksProvider>
);
