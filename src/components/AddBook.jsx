import React, { useState, useContext } from "react";
import { BooksContext } from "../pages/Context";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");
  const { dispatch } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: parseInt(Math.random() * 1000000), // generate a random ID
      title,
      author,
      publicationDate,
      availableCopies: Number(availableCopies), // convert to number
    };
    dispatch({ type: "ADD_BOOK", payload: newBook });
    setTitle("");
    setAuthor("");
    setPublicationDate("");
    setAvailableCopies("");
    alert(`"${title}" Book Successfully Added...`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Publication Date"
        value={publicationDate}
        onChange={(e) => setPublicationDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Available Copies"
        value={availableCopies}
        onChange={(e) => setAvailableCopies(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
