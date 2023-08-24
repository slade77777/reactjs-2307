import './App.css'
import {createContext, useState} from "react";
import {PartA} from "./components/PartA.tsx";
import PartB from "./components/PartB.tsx";

export const TitleContext = createContext<any>(undefined)

function App() {
  const [title, setTitle] = useState<string>('');

  return (
    <TitleContext.Provider value={{title, setTitle}}>
      <div>
        <PartA content={'Part A content'} />
        <PartB />
      </div>
    </TitleContext.Provider>
  )
}

export default App
