import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { getBurrelReducer } from "./getBurrel";
import { getActors } from "./getActors";
import { getDetails } from "./getDetails";
const rootReducer = combineReducers({getBurrelReducer, getDetails, getActors});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});