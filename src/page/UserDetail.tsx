import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import {api} from "../axiois-instance.ts";

const UserDetail = () => {

  const [user, setUser] = useState();

  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    api.get(`/user/${userId}`).then(res => {
      setUser(res.data)
    }).catch(e => console.log(e))
  }, [])

  return <div>
    <h1>User detail page</h1>
    <p>id: {user?.id}</p>
    <p>Name: {user?.name}</p>
    <p>Password: {user?.password}</p>
    {/*<button onClick={() => removeUser(user.id)}>Delete</button>*/}
  </div>
}

export default UserDetail
