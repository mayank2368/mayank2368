import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { combineReducers } from "redux";

const middlewares = [logger];
const store = configureStore(rootReducer, applyMiddleware(...middlewares));
const reducer = combineReducers({
  user: reducer,
});

export default store;
