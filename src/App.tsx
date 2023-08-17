import './App.css'
import {useState} from "react";

function App() {
  const [name, setName] = useState('')
  const [isShowResult, setShowResult] = useState(false);

  return (
    <div>
      <label>Name: </label>
      <input type='text' onChange={e => setName(e.target.value)} />
      {name.length === 0 && <p>Please input name</p>}
      {name.length > 10 && <p>Name is too long</p>}
      <button onClick={() => setShowResult(true)}>Send</button>
      {isShowResult && <p>Name inputted: {name}</p>}
    </div>
  )
}

export default App
