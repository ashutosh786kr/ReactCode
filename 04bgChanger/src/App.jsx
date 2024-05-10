import {useState} from "react"
function App() {

  const [color,setColor] = useState("olive") 

  return (
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}     //injecting variable state
>
  <div className = "fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2" >
  <div className="flex flex-wrap justify-centre gap-4 bg-white px-4 py-4 rounded text-4xl">
    <button
    onClick = {() => setColor("red")}
    className="outline-solid px-6 py-1 rounded-full text-white"
    style={{backgroundColor:"red"}}
    >Red</button>

<button
  onClick={()=>setColor("blue")}
    className="outline-solid px-6 py-1 rounded-full text-white"
    style={{backgroundColor:"blue"}}
    >Blue</button>
  </div>
  </div>
</div>
  )
}
//basically  on click is a function who asks for function itself not any return value but setColor whould require an parameter if we write onClick = {setcolor()} this will
// return a value basically but onClick askes for an function so that ll be  a problem hence we write a callback function that is () which calls setColor 
// function ! so basically its a fucntion callling nother functionn


export default App
