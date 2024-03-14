import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)


  // Password Generator Function
  // useCallback of function memoization / optimization

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


  // ---useRef hook
  const copyPassword = useCallback(() => {

    passwordRef.current?.select();

    // ----if limited selection
    // passwordRef.current?.setSelectionRange(0, 6);

    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3'
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword}
          >Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input className='cursor-pointer'
              type='range'
              min={8}
              max={32}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {setNumAllowed((prev) => !prev)}}
            />
            <label htmlFor="number">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
