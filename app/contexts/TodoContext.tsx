"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { Todo, TodoContextType } from '../types/todo';

// Create the context with a default undefined value
const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

/**
 * Provider component for the Todo context
 */
export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Adds a new todo with the given title
   */
  function addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      isCompleted: false
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  /**
   * Deletes a todo with the specified id
   */
  function deleteTodo(id: string) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  /**
   * Toggles the completion status of a todo with the specified id
   */
  function toggleTodoComplete(id: string) {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, isCompleted: !todo.isCompleted } 
          : todo
      )
    );
  }

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodoComplete
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

/**
 * Custom hook for using the Todo context
 */
export function useTodo() {
  const context = useContext(TodoContext);
  
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  
  return context;
}

