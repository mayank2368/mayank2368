import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
//import { combineReducers } from "redux";
import { persistStore } from "redux-persist";

const middlewares = [logger];
export const store = configureStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default { persistor, store };
