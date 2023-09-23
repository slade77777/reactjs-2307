import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import UserDetail from "./page/UserDetail.tsx";
import Login from "./page/Login.tsx";
import {createContext, useEffect} from "react";
import {Provider} from 'react-redux'
import UsersChosen from "./page/UsersChosen.tsx";
import store from "./store.ts";
import {loginSuccess} from "./slices/userLoginSlice.ts";

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
  useEffect(() => {
    const userLocalStorage = localStorage.getItem('name');
    const passwordLocalStorage = localStorage.getItem('password');
    const idLocalStorage = localStorage.getItem('id');
    if (userLocalStorage) {
      // set user from localstorage into reducer
      store.dispatch(loginSuccess({
        name: userLocalStorage,
        password: passwordLocalStorage,
        id: idLocalStorage
      }))
    }
  }, [])

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
