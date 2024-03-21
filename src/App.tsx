import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleCompleted = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(todos)
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Todo List</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
