import {useContext} from "react";
import {TitleContext} from "../App.tsx";

const HeaderDisplay = ({title}: {title?: string}) => {
  const titleContext = useContext(TitleContext)
  console.log(titleContext);
  return <h1 style={{color: 'white', fontSize: 30}}>{titleContext.title}</h1>
}

export default HeaderDisplay
