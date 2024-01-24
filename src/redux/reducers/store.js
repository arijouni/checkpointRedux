import { createStore } from "redux";
import taskReducer from "./taskReducer";

const store = createStore(
  taskReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
export default store;
