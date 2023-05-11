import React from 'react'
import { useGlobalContext } from '../pages/Context'
import BookCard from './BookCard'

const BookList = () => {
  const { book } = useGlobalContext()

  
  if (book.length < 1) {
    return (
      <h2>
        No Books Available
      </h2>
    )
  }

  const listItems = book.map((item) => <BookCard key={item.id} {...item} />)


  return (

    <div>
      {listItems}
    </div>
  )
}

export default BookList
