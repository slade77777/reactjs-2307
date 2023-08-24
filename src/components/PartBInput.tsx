import {useContext} from "react";
import {TitleContext} from "../App.tsx";

const PartBInput = () => {
  const titleContext = useContext(TitleContext);
  console.log(titleContext);
  return <div>
    <label>New title:</label>
    <input type='text' onChange={e => titleContext.setTitle(e.target.value)} />
  </div>
}

export default PartBInput;
