import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

import { setFilter } from "./components/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const tasks = useSelector((state) => state.tasks);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.isDone);
      case "not-done":
        return tasks.filter((task) => !task.isDone);
      default:
        return tasks;
    }
  };
  console.log(tasks);
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <div>
        <label className="filter">
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not-done">Not Done</option>
          </select>
        </label>
      </div>
      <ListTask tasks={filterTasks(tasks, filter)} />
    </div>
  );
};

export default App;
