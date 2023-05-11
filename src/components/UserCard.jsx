import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../pages/UserContext'

const UserCard = ({
    id,
  name,
  email,
  phoneNumber,
  borrowedBooks,
}) => {

  const { dispatch } = useContext(UserContext);

  const deleteUser = () => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }


  return (
    <div>
      <div>
        <h2>
          {name}
        </h2>
        <Link to={`/user/${id}`}
        state={{name,email,phoneNumber,borrowedBooks}}>
          <div>
            <button>
              View User
            </button>
          </div>
        </Link>
        <Link to={`/user/update/${id}`}
        state={{id,name,email,phoneNumber,borrowedBooks}}>
          <div>
            <button>
            Edit User
            </button>
          </div>
        </Link>
        <div
          onClick={() => {
            deleteUser()
          }}
        >
            <button>
          Delete User
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
