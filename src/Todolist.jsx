import React, { useEffect, useState } from "react";
import { fetchTodos } from "./Api";

const TodoList = ({ onTodoRemoved }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [onTodoRemoved]); // Run the effect whenever onTodoRemoved changes

  const handleRemoveTodo = async (todoId) => {
    try {
      // Send request to remove todo
      // ...

      // Update state after successful removal
      onTodoRemoved(todoId);
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <ul className="list-disc pl-4">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => onTodoRemoved(todo._id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
