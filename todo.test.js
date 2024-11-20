import { expect, test } from 'vitest'
import { addTodo, removeTodo, toggleTodo, clearTodos, todos } from './todo.js'

test('should add a new todo', () => {
  const title = 'Learn unit testing';

  const todo = addTodo(title);

  expect(todo).toHaveProperty('id');
  expect(todo).toHaveProperty('title', title);
  expect(todo).toHaveProperty('completed', false);
  expect(todos).toContainEqual(todo);
});

test('should remove a todo by id', () => {
  const todo = addTodo('Test removal');

  removeTodo(todo.id);

  expect(todos).not.toContainEqual(todo);
});

test('should toggle the completed status of a todo', () => {
  const todo = addTodo('Test toggle');

  toggleTodo(todo.id);

  expect(todo.completed).toBe(true);
  toggleTodo(todo.id);
  expect(todo.completed).toBe(false);
});

test('should not throw an error when toggling a non-existent todo', () => {
  expect(() => toggleTodo(9999)).not.toThrow();
});

