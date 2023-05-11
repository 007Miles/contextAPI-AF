import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BookDetail from "../pages/BookDetail";
import Book from "../pages/Book";
import User from "../pages/User";
import UserDetail from "../pages/UserDetail";
import AddBooks from "../pages/AddBooks";
import UpdateBooks from "../pages/UpdateBooks";
import AddUsers from "../pages/AddUsers";
import UpdateUsers from "../pages/UpdateUsers";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/book/add" element={<AddBooks />} />
      <Route path="/book/update/:id" element={<UpdateBooks />} />

      <Route path="/user" element={<User />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="/user/add" element={<AddUsers />} />
      <Route path="/user/update/:id" element={<UpdateUsers />} />
    </Routes>
  );
};

export default IndexRoutes;
