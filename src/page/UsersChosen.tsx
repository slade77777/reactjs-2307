import {Link} from "react-router-dom";
import Header from "../components/Header.tsx";
import {useSelector} from "react-redux";

const UsersChosen = () => {
  const userList = useSelector((store: any) => store.userChosenList);
  return <div>
    <Header />
    <p>Danh sách user đã chọn: </p>
    {
      userList?.value?.map((user, index) => <Link to={`/user/${user.id}`} key={index}>
        <p>Name: {user.name}</p>
        <p>Password: {user.password}</p>
      </Link>)
    }
  </div>
}

export default UsersChosen;
