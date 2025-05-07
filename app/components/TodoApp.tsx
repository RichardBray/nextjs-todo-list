"use client";

import { TodoProvider } from '../contexts/TodoContext';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

/**
 * Main TodoApp component that wraps the todo functionality
 */
export function TodoApp() {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto p-4">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

