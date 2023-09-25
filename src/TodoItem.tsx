import React from "react";

//Define properties for the ToDoItem component
interface Props {
  task: {
    id: number;
    description: string;
    completed: boolean;
  };
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

//Define ToDoItem component as a functional component receiving Props input.
const ToDoItem = ({ task, onToggleTask, onDeleteTask }: Props) => {
  //Destructure the task to get it's properties
  let { id, description, completed } = task;

  return (
    <div className="flex items-center mb-2">
      {/* Checkbox to toggle on task completion */}
      <input
        type="checkbox"
        className="mr-2"
        checked={completed}
        onChange={() => onToggleTask(id)}
      />

      {/* Task description */}
      <p className={`flex-1 ${completed ? "line-through" : ""}`}>
        {description}
      </p>

      {/* Button to delete the task*/}
      <button
        className="bg-red-500 text-white font-semibold px-2 py-1 rounded"
        onClick={() => onDeleteTask(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
