import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const BooksContext = createContext();

const initialState = {
  books: [{
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationDate: "July 11, 1960",
    availableCopies: 3
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publicationDate: "June 8, 1949",
    availableCopies: 1
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationDate: "April 10, 1925",
    availableCopies: 5
  }],
  selectedBook: null,
};

const booksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "UPDATE_BOOK":
      const updatedBooks = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        }
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };
    case "DELETE_BOOK":
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        books: filteredBooks,
      };
    case "SELECT_BOOK":
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
};


const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);
  const [book, setBook] = useState([])

  // useEffect(() => {
  //   setBook(initialState.books)
  // }, [book])

  useEffect(() => {
    setBook(state.books);
  }, [state.books]);

  console.log(book);

  return (
    <BooksContext.Provider value={{ book: state.books, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(BooksContext)
}

export { BooksContext, BooksProvider };
