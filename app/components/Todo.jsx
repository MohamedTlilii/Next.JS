"use client";
import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const result = await response.json();
      setTodo(result);
    //   console.log(todo);
    }
    fetchTodo();
  }, []);

  return (
    <div>
      <h2>todo</h2>
      <h3>{todo.title}</h3>
    </div>
  );
}

export default Todo;
