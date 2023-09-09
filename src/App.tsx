import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import UserDetail from "./page/UserDetail.tsx";
import Login from "./page/Login.tsx";
import {createContext, useState} from "react";

export const UserContext = createContext(null)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:userId",
    element: <UserDetail />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  const [user, setUser] = useState();
  return <UserContext.Provider value={{user, setUser}}>
    <RouterProvider router={router} />
  </UserContext.Provider>
}

export default App
