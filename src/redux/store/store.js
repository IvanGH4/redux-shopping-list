import { createStore, combineReducers } from "redux";
import itemReducer from "../reducers/itemReducer";
import searchReducer from "../reducers/searchReducer";
import categoryReducer from "../reducers/categoryReducer";

const rootReducer = combineReducers({
  itemReducer,
  searchReducer,
  categoryReducer,
});

const store = createStore(rootReducer);

export default store;
