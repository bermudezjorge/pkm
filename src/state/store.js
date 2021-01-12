import { createStore } from "redux";
import pkmData from "./pkmAPI/pkmApiReducer.js";

export default createStore(pkmData);