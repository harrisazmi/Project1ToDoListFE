import React, { useState } from "react";

const AddTodo = ({ onTodoAdded }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      onTodoAdded({ text });
      setText("");
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Add Todo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-400 p-2 rounded-md mb-4"
        placeholder="Enter your todo here"
      />
      <button
        onClick={handleAddTodo}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
