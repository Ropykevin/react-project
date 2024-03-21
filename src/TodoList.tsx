import React from 'react';

interface Todo {
    id: number;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    toggleCompleted?: (id: number) => void; 
    deleteTodo: (id: number) => void;
}


const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
