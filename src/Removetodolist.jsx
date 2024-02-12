import React from "react";

const RemoveTodoList = ({ onTodoListRemoved }) => {
  const handleRemoveTodoList = () => {
    onTodoListRemoved();
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">Remove Todo List</h2>
      <button
        onClick={handleRemoveTodoList}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Remove All Todos
      </button>
    </div>
  );
};

export default RemoveTodoList;
