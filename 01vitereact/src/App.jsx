import { useState } from 'react'
import Tea from './Tea.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tea />
    <h1>React Vite | Abrar</h1>
    </>
  )
}

export default App
