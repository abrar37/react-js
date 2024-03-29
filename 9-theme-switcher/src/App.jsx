import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //Chnage in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center justify-center">
            <div>
                <div className="w-full mx-auto flex justify-end mb-4">
                  <ThemeBtn />
                </div>

                <div className="w-full mx-auto">
                  <Card />
                </div>
            </div>
        </div>
    </ThemeProvider>
    
  )
}

export default App
