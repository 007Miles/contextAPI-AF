import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// const deleteProductUrl = 'http://localhost:3008/api/v1/products'

const UserCard = ({
    id,
  name,
  email,
  phoneNumber,
  borrowedBooks,
}) => {


  const deleteUser = async () => {
    try {
      const resp = await axios.delete(`https://www.examples.com/${id}`)
      alert('User Deleted Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! User Deletion Failed...')
      console.log(error.response)
    }
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
        <Link to={`/user/update/${id}`}>
          <div>
            <button>
            Edit User
            </button>
          </div>
        </Link>
        <div
          onClick={() => {
            deleteUser()
            window.location.reload(true)
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
