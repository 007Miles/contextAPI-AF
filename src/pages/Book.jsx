import React from "react";
import { BooksProvider } from './Context.jsx'
import BookList from "../components/BookList.jsx";
import { Link } from "react-router-dom";

function Book() {
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
        <h1>
          <u>Book Page</u>
        </h1>
      </div>
      <BooksProvider>
        <div>
          <BookList />
        </div>
      </BooksProvider>
    </main>
  )
}

export default Book;
