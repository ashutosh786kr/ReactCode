import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

// function MyFunc(){
// return (
//   <div>
//   <h1>jai shree ram</h1>
//   </div>
// )
// }

//just to test by making and passing a object
//const anotherElement  = <a href='https://google.com' target ='_blank'>visit google</a>


//creating reacElement through teh ways of react not our way like we did in customreact
//react ka tarike  se bananna react element with authentic-predefined synrtX
// 1st parameter  = tag 
// 2nd parameter = obejct/properties bas nam nahi dete 
// 3rd parameter = direct text

const anotherElement1 = "RadheRadhe"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click karo toh google pahucahun',
  anotherElement1 // at the end variable is inputed inside of this 
)



ReactDOM.createRoot(document.getElementById('root')).
render(
  


    //<MyFunc/>
    //anotherElement
reactElement //passed as object here 
 
)
