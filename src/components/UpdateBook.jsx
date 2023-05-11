import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../pages/Context';

const UpdateBook = () => {
  const { dispatch } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  const [bookData, setBookData] = useState({
    id: location.state.id,
    title: location.state.title,
    author: location.state.author,
    publicationDate: location.state.publicationDate,
    availableCopies: location.state.availableCopies,
  });

  const handleInputChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_BOOK',
      payload: bookData,
    });
    alert(`"${bookData.title}" Book Successfully Updated...`)
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Publication Date</label>
        <input
          type="text"
          name="publicationDate"
          value={bookData.publicationDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Available Copies</label>
        <input
          type="number"
          name="availableCopies"
          value={bookData.availableCopies}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;
