import React, { useEffect, useState } from 'react';
import { getTodos, updateTodoStatus } from '../api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(token);  // Ensure token is passed here
        setTodos(response.data);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      }
    };
    fetchTodos();
  }, [token]);

  const handleStatusChange = async (todoId, completed) => {
    try {
      // Toggle the completion status
      const updatedTodo = await updateTodoStatus(todoId, !completed, token);  // Ensure token is passed here
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
    } catch (error) {
      console.error("Failed to update todo status", error);
    }
  };

  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleStatusChange(todo.id, todo.completed)}  // Handle checkbox toggle
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
  