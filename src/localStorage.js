export const setLocalStorage = (newTodos) => localStorage.setItem('all-todos', JSON.stringify(newTodos));

export const getFromLocalStorage = () => JSON.parse(localStorage.getItem('all-todos')) ?? [];