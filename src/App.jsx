import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Greeting name="John" />
    </>
  )
}

export default App
