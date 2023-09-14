import {useContext} from "react";
import {UsersChosenContext} from "../App.tsx";
import {Link} from "react-router-dom";
import Header from "../components/Header.tsx";

const UsersChosen = () => {
  const userChosenContext = useContext(UsersChosenContext)
  const { userList } = userChosenContext

  return <div>
    <Header />
    <p>Danh sách user đã chọn: </p>
    {
      userList.map((user, index) => <Link to={`/user/${user.id}`} key={index}>
        <p>Name: {user.name}</p>
        <p>Password: {user.password}</p>
      </Link>)
    }
  </div>
}

export default UsersChosen;
