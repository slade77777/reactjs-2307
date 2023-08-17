import {ReactNode, useState} from "react";

const PartB = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState<number>(0)

  function increaseNumber() {
    setCount((c) => c + 1)
  }

  return (
    <div>
      <p>{(new Date()).toLocaleString()}</p>
      <div className="card">
        <button onClick={increaseNumber}>
          count is {count}
        </button>
        {children}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default PartB;
