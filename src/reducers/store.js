// eslint-disable-next-line no-unused-vars
import  React from "react";
import {createStore} from "redux";

import allReducers from "./combine";

const store= createStore(allReducers,);

export default store;