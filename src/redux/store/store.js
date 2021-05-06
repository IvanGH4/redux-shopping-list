import { createStore, combineReducers } from "redux";
import itemReducer from "../reducers/itemReducer";
import searchReducer from "../reducers/searchReducer";
import categoryReducer from "../reducers/categoryReducer";
import userReducer from "../reducers/userReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  itemReducer,
  searchReducer,
  categoryReducer,
  userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
