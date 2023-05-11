import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const UserContext = createContext();

const initialUsers = {
  users: [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phoneNumber: "123-456-7890",
      borrowedBooks: ["To Kill a Mockingbird"]
    },
    {
      id: 2,
      name: "Mary Johnson",
      email: "mary.johnson@example.com",
      phoneNumber: "234-567-8901",
      borrowedBooks: ["To Kill a Mockingbird", "1984"]
    },
    {
      id: 3,
      name: "William Davis",
      email: "william.davis@example.com",
      phoneNumber: "345-678-9012",
      borrowedBooks: ["1984", "The Great Gatsby"]
    }
  ],
}

const UserProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(booksReducer, initialState);
  const [user, setUser] = useState([])

  useEffect(() => {
    setUser(initialUsers.users)
  }, [user])

  console.log(user);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(UserContext)
}

export { UserContext, UserProvider };
