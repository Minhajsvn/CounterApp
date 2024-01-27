import { useState } from 'react'


export default function App() {
  const [count, setCount] = useState(0)

  const handleClick = (action) => {
    if(action == "increment"){
      setCount((prevCount) => prevCount + 1)
    }else{
      setCount((prevCount) => prevCount - 1)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="card">
        <button onClick={() => handleClick("increment")}>Increment</button>
        <button onClick={() => handleClick("decrement")}>Decrement</button>
      </div>
    </>
  )
}

