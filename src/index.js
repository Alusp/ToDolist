import './style.css';

const todosList = [
  { description: 'task1', completed: false, index: 2 },
  { description: 'task2', completed: false, index: 1 },
];

const render = (list) => {
  const filterTodos = list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.all-todos');
  let todosHtml = '';
  filterTodos.forEach((todo) => {
    todosHtml += ` <div class="todo-item">
        <input type="checkbox" /><span> ${todo.description}</span>
    </div>`;
  });
  todosContainer.innerHTML = todosHtml;
};

render(todosList);
