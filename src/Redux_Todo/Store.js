import { createStore } from "redux";
import rootReducer from "./reducers/Index";

const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//middlewares = thunk, saga, redux dev tool extension,

export default Store;
