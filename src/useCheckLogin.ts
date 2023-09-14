import {useContext, useEffect} from "react";
import {UserContext} from "./App.tsx";
import {useNavigate} from "react-router-dom";

export function useCheckLogin() {
  const userContext = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!userContext.user) {
      navigate('/login')
    }
  }, [userContext?.user])
}
