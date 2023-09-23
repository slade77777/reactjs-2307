import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function useCheckLogin() {
  // @ts-ignore
  const userLogin = useSelector(state => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin?.isLoginSuccess) {
      navigate('/login')
    }
  }, [userLogin?.isLoginSuccess])
}
