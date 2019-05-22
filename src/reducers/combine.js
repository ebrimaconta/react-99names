import{combineReducers} from "redux";
import namesReducers from "./reducers_99names";

const rootReducers =combineReducers({
    names : namesReducers
});

export default rootReducers;