import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, SET_FILTER } from "./actions";

const initialState = {
  tasks: [],
  filter: "all",
};

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: action.payload.isDone,
        },
      ];
    case TOGGLE_TODO:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
      );
    case EDIT_TODO:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
