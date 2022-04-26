import { makeAutoObservable } from "mobx";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export class TodoListStore {
  todos: Todo[] = [];
  text = "";

  constructor() {
    makeAutoObservable(this);
  }

  setText(text: string) {
    this.text = text;
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length,
      text: this.text,
      done: false,
    });
    this.text = "";
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

}

export const todoStore = new TodoListStore();