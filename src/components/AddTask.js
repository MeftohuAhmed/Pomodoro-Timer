/**
 * The AddTask component is a functional component that provides an interface for adding a new task.
 * It uses a text input field for task input and a button to submit the task.
 * 
 * The component maintains its local state for the new task input with the useState hook,
 * and uses the SettingsContext to access the addTask function.
 * 
 * The handleNewTaskChange function handles changes to the input field, updating the newTask state accordingly.
 * The handleAddTask function is triggered on button click, adding the new task using the addTask function 
 * from the SettingsContext and clearing the input field.
 * 
 * The component takes no props.
 * 
 * The component returns a div containing an input field for new task input and a button to add the task.
 */


import React, { useState, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const AddTask = () => {
  const { addTask } = useContext(SettingsContext);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text" 
        value={newTask} 
        onChange={handleNewTaskChange} 
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
