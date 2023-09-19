import {useEffect, useRef} from "react";
import {api} from "../axiois-instance.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../slices/userLoginSlice.ts";

const UserDetail = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoginSuccess} = useSelector(state => state.userLogin);

  async function loginClick() {
    const name = nameRef.current?.value;
    const password = passRef.current?.value;
    try {
      await dispatch(login({name, password})).unwrap();
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (isLoginSuccess) {
      navigate('/')
    }
  }, [isLoginSuccess])

  return <div>
    <label>Name:</label>
    <input type='text' ref={nameRef}/>
    <div/>
    <label>Password</label>
    <input type='text' ref={passRef}/>
    <div>
      <button onClick={loginClick}>Login</button>
    </div>
  </div>
}

export default UserDetail;
