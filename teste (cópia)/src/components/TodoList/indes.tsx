import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function TodoList() {
  const [todo, setTodo] = useState([] as Todo[]);
  const [text, setText] = useState("");

  function handleTodoCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextId = todo.length + 1;
    setTodo([...todo, { id: nextId, text, done: false }]);
    setText("");
  }

  function handleTodoRemove(id: number) {
    setTodo(todo.filter((t) => t.id !== id));
  }

  function handleTodoToggle(id: number) {
    setTodo(todo.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Todo List</h1>
      <form onSubmit={handleTodoCreate}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <div style={{ display: "flex" }}>
              <p
                style={{ textDecoration: todo.done ? "line-through" : "" }}
                onClick={() => handleTodoToggle(todo.id)}
              >
                {todo.text}
              </p>
              <button onClick={() => handleTodoRemove(todo.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
