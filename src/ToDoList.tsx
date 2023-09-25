import React from "react";
import ToDoItem from "./TodoItem";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

const ToDoList = () => {
  //State to store list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  //State to store the input value for adding a new task
  const [newTask, setNewTask] = useState("");

  //function to handle adding new task
  const handleAddTask = () => {
    //Ignore empty task description
    if (newTask.trim() === "") return;

    //Create a new task object
    const task: Task = {
      id: Date.now(),
      description: newTask,
      completed: false,
    };

    //Update the tasks state by adding the new task
    setTasks([...tasks, task]);

    //Clear the input value
    setNewTask("");
  };

  //Function to handle toggling the completed status of a task
  const handleToggleTask = (taskId: number) => {
    //Update the tasks state by toggling the completed status of the task with the given id
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  //function to handle deleting a task
  const handleDeleteTask = (taskId: number) => {
    //update tasks state by removing the ask with the given id
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div>
      {/* Header */}
      <h1 className="text-3x1 font-bold mb-4">My To-Do List</h1>
      {/* Task input and add button */}
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-200 rounded p-2 mr-2 w-full focus:outline-none text-sm"
          placeholder="Enter Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold
        px-4 py-2 rounded-r"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      {/* Render each task as a to do item */}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
