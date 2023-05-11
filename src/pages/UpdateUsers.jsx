import React from "react";
import UpdateUser from "../components/UpdateUser";
import { UserProvider } from "./UserContext";
import { Link } from "react-router-dom";

const UpdateUsers = () => {
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
        <h1><u>Update A User</u></h1>
    </div>
    <UserProvider>
      <div>
        <UpdateUser />
      </div>
    </UserProvider>
    </main>
  );
};

export default UpdateUsers;
