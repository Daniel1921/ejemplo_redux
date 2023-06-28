import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/APIs";

export const ToDoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const [page, setPage] = useState(1)
  const { data: todo, isLoading } = useGetTodoByIdQuery(page);
  return (
    <>
      <h1>To Do - RTK query</h1>
      <hr />
      <h4>
        {isLoading ? "Esta cargando..." : "Información cargada exitosamente!"}
      </h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done--> " : "Pending--> "}</strong>
            {todo.title}
          </li>
        ))}
        
      </ul> */}
      <button onClick={() => setPage(page - 1)}>Preview To Do</button>
      <button onClick={() => setPage(page + 1)}>Next To Do</button>     
    </>
  );
};
