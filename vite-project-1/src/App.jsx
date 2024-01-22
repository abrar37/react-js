import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function removeValue(){
    if(counter > 1){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>React Counter: {counter}</h2>
        <button onClick={addValue}>Add Value</button> &ensp;
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
