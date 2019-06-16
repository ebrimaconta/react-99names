 
import {createStore} from "redux";
 
import allReducers from "./combine";

const store= createStore(allReducers);

export default store;