import React from "react";
import { Link } from "react-router-dom";
import { BooksProvider } from "./Context";
import BookList from "../components/BookList";
import { UserProvider } from "./UserContext"; 
import UserList from "../components/UserList";

function Home() {
  return (
  <div>
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
        <u>Books</u>
      </h1>
    </div>
    <div>
      <BooksProvider>
        <div>
          <BookList />
        </div>
      </BooksProvider>
    </div>
    <div>
      <h1>
        <u>Users</u>
      </h1>
    </div>
    <div>
      <UserProvider>
        <div>
          <UserList />
        </div>
      </UserProvider>
    </div>
  </div>
  );
}

export default Home;
