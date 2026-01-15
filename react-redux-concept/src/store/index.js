import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/counter";
import userReducer from "./reducers/user";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  counter: countReducer,
  user: userReducer,
  //   products: productsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
