import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {api} from "../axiois-instance.ts";
import Header from "../components/Header.tsx";
import {useCheckLogin} from "../useCheckLogin.ts";
import {useDispatch} from "react-redux";
import {addUserToList} from "../slices/userChosenListSlice.ts";

const UserDetail = () => {

  const [user, setUser] = useState<any>();

  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    api.get(`/user/${userId}`).then(res => {
      setUser(res.data)
    }).catch(e => console.log(e))
  }, [])

  useCheckLogin();
  const dispatch = useDispatch();

  function chooseUser() {
    dispatch(addUserToList(user))
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
