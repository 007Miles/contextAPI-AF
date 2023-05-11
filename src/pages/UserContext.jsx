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
  selectedUser: null,
}

const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      const updatedUsers = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };
    case "SELECT_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialUsers);
  const [user, setUser] = useState([])

  // useEffect(() => {
  //   setUser(initialUsers.users)
  // }, [user])

  useEffect(() => {
    setUser(state.users);
  }, [state.users]);

  console.log(user);

  return (
    <UserContext.Provider value={{ user: state.users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(UserContext)
}

export { UserContext, UserProvider };
