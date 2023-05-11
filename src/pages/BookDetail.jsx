import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function BookDetail() {
  const location = useLocation()
  const title = location.state.title
  const author = location.state.author
  const publicationDate = location.state.publicationDate
  const availableCopies = location.state.availableCopies

  console.log(location.state);

  function borrowBook () {
    alert(`"${title}" Book Successfully Borrowed...`)
  }

  function returnBook () {
    alert(`"${title}" Book Successfully Returned...`)
  }

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
          Title : {title}
        </h1>
      </div>
      <div>
        <p>
          <b>Author : </b>{author}
        </p>
      </div>
      <div>
        <p>
          <b>Publication Date : </b>{publicationDate}
        </p>
      </div>
      <div>
        <p>
          <b>Available Copies : </b>{availableCopies}
        </p>
      </div>
      <div>
        <button onClick={borrowBook}>
          Borrow Book
        </button>
      </div>
      <div>
        <button onClick={returnBook}>
          Return Book 
        </button>
      </div>
    </div>
  )
}

export default BookDetail;
