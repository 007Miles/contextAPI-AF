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

// const booksReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_BOOKS':
//       return { ...state, books: action.payload };
//     case 'ADD_BOOK':
//       return { ...state, books: [...state.books, action.payload] };
//     case 'UPDATE_BOOK':
//       const updatedBooks = state.books.map((book) =>
//         book.id === action.payload.id ? action.payload : book
//       );
//       return { ...state, books: updatedBooks };
//     case 'DELETE_BOOK':
//       const filteredBooks = state.books.filter(
//         (book) => book.id !== action.payload
//       );
//       return { ...state, books: filteredBooks };
//     case 'SELECT_BOOK':
//       return { ...state, selectedBook: action.payload };
//     case 'BORROW_BOOK':
//       const borrowedBook = state.books.find(
//         (book) => book.id === action.payload.bookId
//       );
//       borrowedBook.copies--;
//       borrowedBook.borrowers.push(action.payload.userId);
//       const updatedBorrowedBooks = state.books.map((book) =>
//         book.id === borrowedBook.id ? borrowedBook : book
//       );
//       return { ...state, books: updatedBorrowedBooks };
//     case 'RETURN_BOOK':
//       const returnedBook = state.books.find(
//         (book) => book.id === action.payload.bookId
//       );
//       returnedBook.copies++;
//       returnedBook.borrowers = returnedBook.borrowers.filter(
//         (borrower) => borrower !== action.payload.userId
//       );
//       const updatedReturnedBooks = state.books.map((book) =>
//         book.id === returnedBook.id ? returnedBook : book
//       );
//       return { ...state, books: updatedReturnedBooks };
//     default:
//       return state;
//   }
// };

const BooksProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(booksReducer, initialState);
  const [book, setBook] = useState([])

  useEffect(() => {
    setBook(initialState.books)
  }, [book])

  console.log(book);

  return (
    <BooksContext.Provider value={{ book }}>
      {children}
    </BooksContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(BooksContext)
}

export { BooksContext, BooksProvider };
