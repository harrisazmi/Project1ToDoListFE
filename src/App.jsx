// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./Addtodo";
import TodoList from "./Todolist";
import RemoveTodoList from "./Removetodolist";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://project1backendcf.harrisviewcodes.uk/api/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial todos on mount

    const intervalId = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleTodoAdded = async (addedTodo) => {
    try {
      await axios.post(
        "https://project1backendcf.harrisviewcodes.uk/api/todos",
        addedTodo
      );
      fetchData(); // Fetch updated todos after addition
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleTodoListRemoved = async () => {
    try {
      await axios.delete(
        "https://project1backendcf.harrisviewcodes.uk/api/todos"
      );
      fetchData(); // Fetch updated todos after removal
    } catch (error) {
      console.error("Error removing todo list:", error);
    }
  };

  const handleTodoRemoved = async (removedTodoId) => {
    try {
      await axios.delete(
        `https://project1backendcf.harrisviewcodes.uk/api/todos/${removedTodoId}`
      );
      fetchData(); // Fetch updated todos after removal
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Todo App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-gray-300">
            <AddTodo onTodoAdded={handleTodoAdded} />
          </div>
          <div className="col-span-2 bg-white rounded-lg p-6">
            <RemoveTodoList onTodoListRemoved={handleTodoListRemoved} />
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg p-6">
          <TodoList todos={todos} onTodoRemoved={handleTodoRemoved} />
        </div>
      </div>
    </div>
  );
};

export default App;
