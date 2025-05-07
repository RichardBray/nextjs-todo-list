/**
 * Interface representing a Todo item
 */
export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

/**
 * Interface for the Todo context
 */
export interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;
}

