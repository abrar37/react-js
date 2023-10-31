import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#313131")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={() => setColor("Red")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Red"}}>Red</button>
            <button onClick={() => setColor("Gray")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Gray"}}>Gray</button>
            <button onClick={() => setColor("Blue")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={() => setColor("Olive")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Olive"}}>Olive</button>
            <button onClick={() => setColor("Pink")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Pink"}}>Pink</button>
            <button onClick={() => setColor("Green")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={() => setColor("Black")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Black"}}>Black</button>
            <button onClick={() => setColor("Purple")} className='px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"Purple"}}>Purple</button>
          </div>
        </div>
    </div>
  )
}

export default App
