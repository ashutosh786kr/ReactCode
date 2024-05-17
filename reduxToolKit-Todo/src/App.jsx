/*here to wrap this in provider like
 we did in app.jsx we gotta wrap it 
 up with provider and it is done using store  , hence we exported the store ka content
 so here provider commes from the react redux
 */

//lets do it in main.jsx

import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
