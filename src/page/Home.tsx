import {useEffect, useState} from "react";
import {api} from "../axiois-instance.ts";
import withLoadingLogic from "../components/HOC.tsx";
import {PartA} from "../components/PartA.tsx";
import PartB from "../components/PartB.tsx";
import { Outlet, Link } from "react-router-dom";

// combine component with HOC
const PartAWithLoading = withLoadingLogic(PartA);
const PartBWithLoading = withLoadingLogic(PartB);


const Home = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUser() {
    const response = await api.get('/user');
    setUserList(response.data);
  }

  async function removeUser(id: number) {
    try {
      // start loading
      setLoading(true);
      await api.delete(`/user/${id}`);
      // refetch data
      getUser();
      setLoading(false);
      //hide loading
    } catch (e) {
      alert('something wrong')
    }
  }

  async function addNewUser() {
    try {
      const response = await api.post('/user', {
        name: 'fake 3',
        password: 'fake password 3'
      })
      // refetch data
      getUser();
    } catch (e) {
      console.log(e);
      alert('something wrong')
    }
  }

  useEffect(() => {
    // call api to get list user
    getUser();
  }, [])


  return (
    <div style={{ }}>
      {/*<PartAWithLoading />*/}
      {/*<PartBWithLoading />*/}
      <button onClick={addNewUser}>ADD NEW</button>
      {
        userList.map((user, index) => <Link to={`/user/${user.id}`} key={index}>
          <p>id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Password: {user.password}</p>
          <button onClick={() => removeUser(user.id)}>Delete</button>
        </Link>)
      }
    </div>
  )
}

export default Home
