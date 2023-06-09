import React from "react";
import AddBook from "../components/AddBook";
import { BooksProvider } from "./Context";
import { Link } from "react-router-dom";

const AddBooks = () => {
  return (
    <main>
        <div>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
        <Link to={`/user`}>
          <button>User Page</button>
        </Link>
        <Link to={`/book`}>
          <button>Book Page</button>
        </Link>
      </div>
    <div>
        <h1><u>Add A New Book</u></h1>
    </div>
    <BooksProvider>
      <div>
        <AddBook />
      </div>
    </BooksProvider>
    </main>
  );
};

export default AddBooks;
