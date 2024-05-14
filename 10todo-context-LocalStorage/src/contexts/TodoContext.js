import { createContext, useContext } from "react";

//random models for todos, by default it will be empty just to remember in case
//its basically array ke andar object mil gya!

/*IN context here , we just add the funtion that okay you are such such function
  but its functionality is defined in app.jsx*/
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo-msg",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
