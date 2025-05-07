"use client";

import { useTodo } from '../contexts/TodoContext';
import { TodoItem } from './TodoItem';

/**
 * Component for displaying the list of todos
 */
export function TodoList() {
  const { todos } = useTodo();
  
  /**
   * Renders the appropriate content based on whether there are todos
   */
  function renderContent() {
    if (todos.length === 0) {
      return (
        <div className="p-4 text-center text-gray-500">
          No todos yet. Add some using the form above!
        </div>
      );
    }
    
    return (
      <ul className="border border-gray-200 rounded">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
  
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-2">Your Todos ({todos.length})</h2>
      {renderContent()}
    </div>
  );
}

