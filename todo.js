let todos = [];

function addTodo(title) {

  const todo = {
    id: Date.now(),
    title,
    completed: false,
  };
  
  todos.push(todo);
  
  return todo;
}

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

function toggleTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

function clearTodos() {
  todos = [];
}

export { addTodo, removeTodo, toggleTodo, clearTodos, todos };
