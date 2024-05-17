import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "./actions";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    const id = uuidv4();
    dispatch(addTodo(id, taskInput));
    setTaskInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
