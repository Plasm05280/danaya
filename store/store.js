import { createStore, combineReducers } from "redux";
import Reducer from "./reducer/reducer";
import Pricing from "./reducer/card";

const Combined = combineReducers({ Store: Reducer, Pricing });
export default createStore(Combined);
