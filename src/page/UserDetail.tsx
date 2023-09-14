import {useContext, useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import {api} from "../axiois-instance.ts";
import Header from "../components/Header.tsx";
import {UsersChosenContext} from "../App.tsx";
import {useCheckLogin} from "../useCheckLogin.ts";

const UserDetail = () => {

  const [user, setUser] = useState();

  const params = useParams();
  const userId = params.userId;
  const userContext = useContext(UsersChosenContext);

  useEffect(() => {
    api.get(`/user/${userId}`).then(res => {
      setUser(res.data)
    }).catch(e => console.log(e))
  }, [])

  useCheckLogin();
  function chooseUser() {
    userContext.setUserList([...userContext.userList, {name: user?.name, password: user?.password}]);
  }

  if (!user) {
    return <p>Loading</p>
  }

  return <div>
    <Header />
    <h1>User detail page</h1>
    <p>id: {user?.id}</p>
    <p>Name: {user?.name}</p>
    <p>Password: {user?.password}</p>
    <button onClick={chooseUser}>Choose</button>
  </div>
}

export default UserDetail
