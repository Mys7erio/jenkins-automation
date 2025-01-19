import React, { useState } from 'react';
import { createTodo } from '../api';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the title, description, and completed fields in the correct format
      await createTodo({ title, description, completed }, token);
      alert('Todo added!');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
