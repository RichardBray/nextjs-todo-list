"use client";

import { useState, FormEvent } from 'react';
import { useTodo } from '../contexts/TodoContext';

/**
 * Form component for adding new todos
 */
export function TodoForm() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodo();
  
  /**
   * Handles form submission to add a new todo
   */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Validate that we have a title before adding
    if (title.trim()) {
      addTodo(title.trim());
      setTitle(''); // Clear the input after adding
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
}

