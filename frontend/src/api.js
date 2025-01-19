import axios from 'axios';

const API_URL = 'http://localhost:8000'; // FastAPI backend URL

export const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = async (user) => {
  return await api.post('/register/', user);
};

export const loginUser = async (user) => {
  return await api.post('/login/', user);
};

export const createTodo = async (todo, token) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/todos/',
      todo,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Bearer token for authentication
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async (token) => {
  return await api.get('/todos/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



export const updateTodoStatus = async (todoId, completed, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/todos/${todoId}/?completed=${completed}`, // Sending completed as a query param
      {},  // Empty body
      {
        headers: {
          Authorization: `Bearer ${token}`,  // Pass token here
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update todo status", error);
    throw error;
  }
};
