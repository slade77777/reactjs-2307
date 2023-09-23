import {useEffect, useState} from "react";
import {api} from "../axiois-instance.ts";
import { Link } from "react-router-dom";
import Header from "../components/Header.tsx";
import {useCheckLogin} from "../useCheckLogin.ts";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../slices/userLoginSlice.ts";

const UserForm = ({getUser, user, removeUserChosing} : {getUser: () => void, user?: object, removeUserChosing: () => void}) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  async function addNewUser() {
    try {
      await api.post('/user', {
        name,
        password
      })
      // refetch data
      getUser();
      setName('');
      setPassword('');
    } catch (e) {
      console.log(e);
      alert('something wrong')
    }
  }

  async function editUser() {
    try {
      await api.put(`/user/${user.id}`, {
        name,
        password
      })
      // refetch data
      getUser();
      setName('');
      setPassword('');
      removeUserChosing();
    } catch (e) {
      console.log(e);
      alert('something wrong')
    }
  }

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPassword(user.password)
    }
  }, [user])

  return <div className="flex items-center justify-center flex-col w-full">
    <p>Name:</p>
    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    <p>Password:</p>
    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
    <div><button onClick={user ? editUser : addNewUser}>{user ? 'edit' : 'add'}</button></div>
  </div>
}

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userChosing, setUserChosing] = useState()

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

  useEffect(() => {
    // call api to get list user
    getUser();
  }, [])

  useCheckLogin();
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);

  function removeUserChosing() {
    setUserChosing(undefined)
  }

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <div className="w-screen flex flex-row">
      <Header />
      {/*<PartAWithLoading />*/}
      {/*<PartBWithLoading />*/}
      <div className="w-1/3 border-white border-r-2">
      <p>Welcome , {userLogin?.name}</p>
        {
          userList.map((user, index) => <Link to={`/user/${user?.id}`} className="cursor-pointer" key={index}>
            <p>id: {user?.id}</p>
            <p>Name: {user?.name}</p>
            <p>Password: {user?.password}</p>
            <button onClick={() => removeUser(user?.id)}>Delete</button>
          </Link>)
        }
      </div>
      <UserForm getUser={getUser} user={userChosing} removeUserChosing={removeUserChosing} />
      <button className="fixed top-4 right-4" onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Home
