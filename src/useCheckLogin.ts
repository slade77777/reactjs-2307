import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function useCheckLogin() {
  const userLogin = useSelector(state => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin?.name) {
      navigate('/login')
    }
  }, [userLogin?.name])
}
