import {Link} from "react-router-dom";
import {useContext} from "react";
import {UsersChosenContext} from "../App.tsx";

const Header = () => {
  const userChosenContext = useContext(UsersChosenContext)
  const { userList } = userChosenContext

  return <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: 60, backgroundColor: 'white'}}>
    <Link to={'/list-user-chosen'} ><p style={{color: 'black'}}>Danh sách người dùng đã chọn: {userList.length}</p></Link>
  </div>
}

export default Header;
