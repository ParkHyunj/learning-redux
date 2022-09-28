import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {
    type: ADD,
    id: Date.now(),
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

const reducer = (state = JSON.parse(window.localStorage.getItem("todos")) || [], action) => {
  switch (action.type) {
  case ADD:
  return save([{ text: action.text, id: Date.now() }, ...state]);
  case DELETE:
  return save(state.filter((todo) => todo.id !== parseInt(action.id)));
  default:
  return state;
  }
  };
  
  const save = (state) => {
  window.localStorage.setItem("todos", JSON.stringify(state));
  return state;
  };
  const store = createStore(reducer);
  
  export const actionCreators = {
  addToDo,
  deleteToDo,
  };
  
  export default store;