import { createStore, combineReducers } from "redux";
import category from "./categories";
import todo from "./todo";

const reducers = combineReducers({ category, todo });

export default createStore(reducers);
