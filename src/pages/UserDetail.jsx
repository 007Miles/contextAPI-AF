import React from "react";
import { Link, useLocation } from "react-router-dom";

function UserDetail() {
  const location = useLocation()
  const name = location.state.name
  const email = location.state.email
  const phoneNumber = location.state.phoneNumber
  const borrowedBooks = location.state.borrowedBooks

  console.log(location.state);

  const joinBooks = borrowedBooks.join(", ")
  console.log(joinBooks);

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
          Name : {name}
        </h1>
      </div>
      <div>
        <p>
          <b>E-mail : </b>{email}
        </p>
      </div>
      <div>
        <p>
          <b>Phone Number : </b>{phoneNumber}
        </p>
      </div>
      <div>
        <p>
          <b>Borrowed Books : </b>{joinBooks}
        </p>
      </div>
    </div>
  )
}

export default UserDetail;
