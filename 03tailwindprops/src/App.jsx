import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// let myObj ={
//   username: "Ashutosh",
//   age: 21

// }

// let myArr = [1,2,3,4]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className ='bg-green-400 text-black p-4 rounded-xl mb-6'>Creating using tailwind</h1>
    <Card username="Ashutosh " buttonText="click karo"/>
    <Card username="ram" buttonText="please click"/>
    
    </>
  )
}

export default App

//mb is used as margin bottom t make bottton margin work 