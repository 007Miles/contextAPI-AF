import React from "react";
import UpdateBook from "../components/UpdateBook";
import { BooksProvider } from "./Context";
import { Link } from "react-router-dom";

const UpdateBooks = () => {
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
        <h1><u>Update A Book</u></h1>
    </div>
    <BooksProvider>
      <div>
        <UpdateBook />
      </div>
    </BooksProvider>
    </main>
  );
};

export default UpdateBooks;
