import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [valueCount, valueCounter] = useState(5)
  //let counter = 5

  const addValue = () =>{
    console.log("incremental pressed", valueCount);
      valueCounter(valueCount +1);
      console.log("value increased to ", valueCount);
  }

  const decrValue = () =>{
    if(valueCount >0){
    valueCounter(valueCount-1);
    }
      
  }

  //return part 
  return (
    <>
    <h1>Radhe Radhe</h1>  
    <h2>Counter value : {valueCount}</h2>
    <button
    onClick={addValue}
    >increment:{valueCount}</button><br/>
    <button
    onClick={decrValue}
    >decrement:{valueCount} </button>
    </>
  )
}
 
export default App
