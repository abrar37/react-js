import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let carObj = {
    headig: "Heading",
    cardPera: "Hello Word"
  }

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <Card heading="Macbook" cardText="Lorem ipsum dolor Macbook." imageLink="https://source.unsplash.com/800x600/?laptop,macbook"/>
      <Card heading="HP" imageLink="https://source.unsplash.com/800x600/?laptop,hp"/>
      <Card heading="Dell" cardText="Lorem ipsum dolor Dell."/>
      <Card cardText="Lorem ipsum dolor Chromebook." imageLink="https://source.unsplash.com/800x600/?laptop,chromebook"/>
    </>
  )
}

export default App
