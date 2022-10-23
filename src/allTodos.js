import { getFromLocalStorage, setLocalStorage } from './localStorage.js';

export default class Todos {
  constructor() {
    this.list = getFromLocalStorage();
  }

  addTodo(todo) {
    this.list.push(todo);
    setLocalStorage(this.list);
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    setLocalStorage(this.list);
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    setLocalStorage(this.list);
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    setLocalStorage(this.list);
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    setLocalStorage(this.list);
  }
}
