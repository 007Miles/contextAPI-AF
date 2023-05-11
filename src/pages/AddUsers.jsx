import React from "react";
import AddUser from "../components/AddUser";
import { UserProvider } from "./UserContext";
import { Link } from "react-router-dom";

const AddUsers = () => {
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
        <h1><u>Add A New User</u></h1>
    </div>
    <UserProvider>
      <div>
        <AddUser />
      </div>
    </UserProvider>
    </main>
  );
};

export default AddUsers;
