import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../slices/userLoginSlice.ts";
import styled from "styled-components";

const UserDetail = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoginSuccess, loading} = useSelector(state => state.userLogin);

  async function loginClick() {
    const name = nameRef.current?.value;
    const password = passRef.current?.value;
    try {
      // @ts-ignore
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

  if (loading) {
    return <div>loading</div>
  }

  return <div>
    <p className="text-lime-600 text-3xl">Name:</p>
    <input type='text' ref={nameRef}/>
    <div/>
    <p>Password</p>
    <input type='text' ref={passRef} color={'blue'} />
    <div>
      <button onClick={loginClick}>Login</button>
    </div>
  </div>
}

export default UserDetail;

const StyledLabel = styled.label`
  font-size: 4rem;
  font-weight: 300;
  color: white;
  
  @media(max-width: 800px) {
    font-size: 1rem;
  }
`

const StyledInput = styled.input<{ color?: string; }>`
  height: 3rem;
  border-radius: 5px;
  background-color: ${props => props.color};
  &:hover {
    background-color: green;
  }
`

const StyledSmallLabel = styled(StyledLabel)`
  font-size: 2rem;
`
