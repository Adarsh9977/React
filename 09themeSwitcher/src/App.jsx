
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Themebutton from './Components/Themebutton'
import Card from './Components/Card'

function App() {
const [thememode, setThememode] = useState("light")

const lightTheme = ()=>{
setThememode("light")
}

const darkTheme = ()=>{
  setThememode("dark")
  }
//actual change in a theme

useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(thememode)
}, [thememode])

return (
    <ThemeProvider value={{thememode, lightTheme, darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Themebutton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
      </div>
  </div>

  </ThemeProvider>

  )
}

export default App
