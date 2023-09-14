import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import UserDetail from "./page/UserDetail.tsx";
import Login from "./page/Login.tsx";
import {createContext, useState} from "react";
import UsersChosen from "./page/UsersChosen.tsx";

export const UserContext = createContext(null)
export const UsersChosenContext = createContext([]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/user/:userId",
    element: <UserDetail/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: '/list-user-chosen',
    element: <UsersChosen />
  }
]);

function App() {
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([]);
  return (<UsersChosenContext.Provider value={{userList , setUserList}}>
      <UserContext.Provider value={{user, setUser}}>
        <RouterProvider router={router}/>
      </UserContext.Provider>
    </UsersChosenContext.Provider>
  )
}

export default App
