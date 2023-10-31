import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {

    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }

    // counter = counter + 1
    // setCounter(counter)

    // console.log("Clicked", counter);
  }

  const removeValue = () =>{
    if (counter > 1) {
    setCounter(counter - 1)
  }}

  return (
    <>
     <h1>React Counter Task</h1>
     <h3>Counter Value: {counter}</h3>

     <button onClick={addValue}>Add Value</button>
     &emsp;
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
