import React from "react";
import { UserProvider } from './UserContext.jsx'
import UserList from "../components/UserList.jsx";
import { Link } from "react-router-dom";

function User() {
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
        <u>User Page</u>
      </h1>
    </div>
    <div>
        <Link to={`/user/add`}>
          <button>Add New User</button>
        </Link>
      </div>
    <UserProvider>
      <div>
        <UserList />
      </div>
    </UserProvider>
  </main>
)
}

export default User;
