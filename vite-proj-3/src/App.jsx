import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setColor] = useState('orange')
  
  return (
  
    <>
      <div className='w-screen h-screen duraion-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center buttom-12 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full'>
            <button className='outline-none px-4 py-2 rounded-full' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-2 rounded-full' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
            <button className='outline-none px-4 py-2 rounded-full' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
