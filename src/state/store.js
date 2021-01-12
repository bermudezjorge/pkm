import { createStore, combineReducers } from "redux";
import pkmData from "./pkmAPI/pkmApiReducer.js";

const reducers = combineReducers({ pkmData });

export default createStore(reducers);