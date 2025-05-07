import { TodoApp } from './components/TodoApp';

/**
 * Home page component that displays the todo list application
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md mx-auto">
        <header className="py-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Next.js Todo List</h1>
          <p className="text-gray-600 mt-2">Keep track of your tasks</p>
        </header>
        
        <main className="bg-white shadow-md rounded-lg p-6">
          <TodoApp />
        </main>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Next.js Todo List Application - {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
