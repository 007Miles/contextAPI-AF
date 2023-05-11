import React from "react";
import UpdateBook from "../components/UpdateBook";
import { BooksProvider } from "./Context";

const UpdateBooks = () => {
  return (
    <main>
    <div>
        <h1><u>Update A Book</u></h1>
    </div>
    <BooksProvider>
      <div>
        <UpdateBook />
      </div>
    </BooksProvider>
    </main>
  );
};

export default UpdateBooks;
