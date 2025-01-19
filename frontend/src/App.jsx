import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/todos">Todo List</Link>
            </li>
            <li>
              <Link to="/create-todo">Create Todo</Link>
            </li>
          </ul>
        </nav>

        <h1>Todo App</h1>

        {/* Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/create-todo" element={<TodoForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
