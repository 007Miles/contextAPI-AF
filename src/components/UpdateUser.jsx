import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../pages/UserContext';

const UpdateUser = () => {
  const { dispatch } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  const [userData, setUserData] = useState({
    id: location.state.id,
    name: location.state.name,
    email: location.state.email,
    phoneNumber: location.state.phoneNumber,
    borrowedBooks: location.state.borrowedBooks,
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_USER',
      payload: userData,
    });
    alert(`User "${userData.name}" Successfully Updated...`)
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Borrowed Books</label>
        <input
          type="text"
          name="booksBorrowed"
          value={userData.borrowedBooks}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
