import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo } from "./actions";

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(task.id, editedDescription));
    setEditMode(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {editMode ? (
        <>
          <input
            type="text"
            className="edit"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
