import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write what you want to do !"
        className="w-full border border-black/10 rounded -l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-900 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
/*jab bhi on change hota hai tab change kaise karenge toh pehle
 ek event le lete hai like e and fir usko function ke sath call karelete hai like event e.target.value*/

//when submitting the value we make a call for onSubmit so when submit happen ti calls the function add
