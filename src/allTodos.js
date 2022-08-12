export default class Todos {
  constructor() {
    this.list = localStorage.getItem('all-todos')
      ? JSON.parse(localStorage.getItem('all-todos'))
      : [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem('all-todos', JSON.stringify(this.list));
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('all-todos', JSON.stringify(this.list));
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('all-todos', JSON.stringify(this.list));
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    localStorage.setItem('all-todos', JSON.stringify(this.list));
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('all-todos', JSON.stringify(this.list));
  }
}
