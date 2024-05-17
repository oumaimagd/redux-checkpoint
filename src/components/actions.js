export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_FILTER = "SET_FILTER";

export const addTodo = (id, description) => ({
  type: ADD_TODO,
  payload: {
    id,
    description,
    isDone: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const editTodo = (id, description) => ({
  type: EDIT_TODO,
  payload: { id, description },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
