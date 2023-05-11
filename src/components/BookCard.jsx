import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from "../pages/Context";

const BookCard = ({
    id,
  title,
  author,
  publicationDate,
  availableCopies,
}) => {

  const { dispatch } = useContext(BooksContext);

  const deleteBook = () => {
    dispatch({
      type: "DELETE_BOOK",
      payload: id,
    });
  }

//   console.log(name, writer, date, copies);

const bookData = {
    name: title,
    writer: author,
    date: publicationDate,
    copies: availableCopies,
  };

  console.log(bookData);

  return (
    <div>
      <div>
        <h2>
          {title}
        </h2>
        <Link to={`/book/${id}`}
        state={{title,author,publicationDate,availableCopies}}>
          <div>
            <button>
              View Book
            </button>
          </div>
        </Link>
        <Link to={`/book/update/${id}`}
        state={{id,title,author,publicationDate,availableCopies}}>
          <div>
            <button>
            Edit Book
            </button>
          </div>
        </Link>
        <div
          onClick={() => {
            deleteBook()
          }}
        >
            <button>
          Delete Book 
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
