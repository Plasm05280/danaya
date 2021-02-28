import { createStore, combineReducers } from "redux";
import Reducer from "./reducer/reducer";
import Card from "./reducer/card";

const Combined = combineReducers({ test: Reducer, Card });

export default createStore(Combined);
