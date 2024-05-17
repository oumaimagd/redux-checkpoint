import React from "react";
import Task from "./Task";

const ListTask = ({ tasks }) => {
  return (
    <div className="taskt">
      <h2>Tasks </h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
