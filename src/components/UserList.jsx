import React from 'react'
import { useGlobalContext } from '../pages/UserContext'
import UserCard from './UserCard'

const UserList = () => {
  const { user } = useGlobalContext()

  
  if (user.length < 1) {
    return (
      <h2>
        No Users Available
      </h2>
    )
  }

  const listItems = user.map((item) => <UserCard key={item.id} {...item} />)


  return (

    <div>
      {listItems}
    </div>
  )
}

export default UserList
