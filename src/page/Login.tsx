import {useRef} from "react";
import {api} from "../axiois-instance.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../slices/userLoginSlice.ts";

const UserDetail = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function login() {
    const name = nameRef.current?.value;
    const password = passRef.current?.value;
    api.get(`/user?name=${name}&&password=${password}`).then(res => {
      if (res.data.length > 0) {
        //login success
        // use dispatch
        dispatch(loginSuccess(name))
        navigate('/')
      } else {
        alert('login fail')
      }
    }).catch(e => {
      console.log(e)
      alert('login fail')
    })
  }

  return <div>
    <label>Name:</label>
    <input type='text' ref={nameRef}/>
    <div/>
    <label>Password</label>
    <input type='text' ref={passRef}/>
    <div>
      <button onClick={login}>Login</button>
    </div>
  </div>
}

export default UserDetail;
