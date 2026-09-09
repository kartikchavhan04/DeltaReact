import { useState } from 'react'
import './App.css'
import Counter from './Counter.jsx'
import UserInput from './UserInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <UserInput />
      <UserInput></UserInput>
    </>
  )
}

export default App
