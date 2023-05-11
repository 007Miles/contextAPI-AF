import React, { useState, useContext } from "react";
import { UserContext } from "../pages/UserContext";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState("");
  const { dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: parseInt(Math.random() * 1000000), // generate a random ID
      name,
      email,
      phoneNumber,
      borrowedBooks, 
    };
    dispatch({ type: "ADD_USER", payload: newUser });
    setName("");
    setEmail("");
    setPhoneNumber("");
    setBorrowedBooks("");
    alert(`New User "${name}" Successfully Added...`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Books Borrowed"
        value={borrowedBooks}
        onChange={(e) => setBorrowedBooks(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
