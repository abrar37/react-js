import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('#212121');

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ")


  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    };

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator()
  }, [length, numAllowed, charAllowed, passwordGenrator]);


  const passwordRef = useRef(null);

  const copyPassword = () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(2, 7)
    window.navigator.clipboard.writeText(password)
  };



  return (
    <>
      <div className='w-screen h-screen duraion-200 flex flex-col justify-center' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full'>

            <span className='outline-none px-4 py-2 rounded-full cursor-pointer' style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</span>
            <span className='outline-none px-4 py-2 rounded-full cursor-pointer' style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</span>
            <span className='outline-none px-4 py-2 rounded-full cursor-pointer' style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>orange</span>
          </div>
        </div>


        <div className="flex flex-wrap mt-7 justify-center">
          <div className="flex flex-col justify-center bg-gray-600 rounded-lg p-6 gap-3">
            <h2 className="text-3xl">Password Genrator</h2>

            <div className="flex flex-row">
              <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3 bg-gray-400 rounded-l-md"
                placeholder="Password"
                readOnly
                ref={passwordRef} />
              <button
                id="copy-btn"
                className="rounded-r-md"
                onClick={copyPassword}
              >Copy</button>
            </div>

            <div className='flex flex-row gap-2'>
              <div className='flex gap-1'>
                <input
                  type="range"
                  min={8}
                  max={20}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => { setLength(e.target.value) }} />
                <label>Length({length})</label>
              </div>


              <div className='flex gap-1'>
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  onClick={() => {
                    setNumAllowed((prev) => !prev)
                  }} />
                <label>Number</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  onClick={() => {
                    setCharAllowed((prev) => !prev)
                  }} />
                <label>Special Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
