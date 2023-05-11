import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// const deleteProductUrl = 'http://localhost:3008/api/v1/products'

const BookCard = ({
    id,
  title,
  author,
  publicationDate,
  availableCopies,
}) => {


  const deleteBook = async () => {
    try {
      const resp = await axios.delete(`https://www.examples.com/${id}`)
      alert('Book Deleted Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Book Deletion Failed...')
      console.log(error.response)
    }
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
        <Link to={`/book/update/${id}`}>
          <div>
            <button>
            Edit Book
            </button>
          </div>
        </Link>
        <div
          onClick={() => {
            deleteBook()
            window.location.reload(true)
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
