import { counter } from "./reducer/reducer";
import { toggle } from "./reducer/toggle";
import { combineReducers } from "redux";

export let rootReducer = combineReducers({
  counter: counter,
  toggle: toggle,
});
