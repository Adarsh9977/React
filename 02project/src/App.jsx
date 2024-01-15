import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, serCounter] = useState(5)


  // let counter= 5;

  const addValue = ()=>{
    if (counter==10) {
      return
    }
    else{
    serCounter(counter+1)}
  }

  const removeValue = ()=>{
    if (counter== 0 ) {
      return
    }
    else{
    serCounter(counter-1)}
  }

  return (
    <>
      
      <h1>react first </h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter} </button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
