import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    if (count >= 1) {
      setCount(count - 1)
    }

  }


  return (
    <>
      <h1>count {count}</h1>
      <button onClick={Increment}>Add </button>
      <button onClick={Decrement}>decrement </button>
    </>
  )
}

export default App
