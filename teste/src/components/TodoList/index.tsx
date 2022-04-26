import { Observer } from "mobx-react-lite";

import { todoStore as store } from "./store";

export function TodoList() {
  return (
    <Observer>
      {() => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>Todo List</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              store.addTodo();
            }}
          >
            <input
              type="text"
              value={store.text}
              onChange={(event) => store.setText(event.target.value)}
            />
          </form>
          <ul>
            {store.todos.map((todo) => (
              <li key={todo.id}>
                <div style={{ display: "flex" }}>
                  <p
                    style={{ textDecoration: todo.done ? "line-through" : "" }}
                    onClick={() => store.toggleTodo(todo.id)}
                  >
                    {todo.text}
                  </p>
                  <button onClick={() => store.removeTodo(todo.id)}>x</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Observer>
  );
}
