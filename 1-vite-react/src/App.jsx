import { useState } from 'react'
import Tea from './Tea.jsx'


function App() {
  const [count, setCount] = useState(0)

  const userName = "Abrar!"

  return (
    <>
    <Tea />
    {/* Evaluated Expression */}
    <h1>React Vite | {userName}</h1>
    </>
  )
}

export default App
