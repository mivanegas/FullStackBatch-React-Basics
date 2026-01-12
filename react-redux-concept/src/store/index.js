import { createStore } from "redux";
import countReducer from "./reducers/counter";

const initialState = {
  count: 0,
};

const store = createStore(countReducer);

export default store;
