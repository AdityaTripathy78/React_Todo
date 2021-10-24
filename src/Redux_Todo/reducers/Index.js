import { combineReducers } from "redux";
import TodoReducers from "./TodoReducers";

//npm i redux react-redux
const rootReducer = combineReducers({
  TodoReducers,
});

export default rootReducer;
