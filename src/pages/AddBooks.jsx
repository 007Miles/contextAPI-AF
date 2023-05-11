import React from "react";
import AddBook from "../components/AddBook";
import { BooksProvider } from "./Context";

const AddBooks = () => {
  return (
    <main>
    <div>
        <h1><u>Add A New Book</u></h1>
    </div>
    <BooksProvider>
      <div>
        <AddBook />
      </div>
    </BooksProvider>
    </main>
  );
};

export default AddBooks;
