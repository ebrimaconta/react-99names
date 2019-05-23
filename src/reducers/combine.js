import{combineReducers} from "redux";
import namesReducers from "./reducers_99names";
import asmaquranReducers from "./reducers_asmaquran";

const allReducers =combineReducers({
    names : namesReducers,
    asmaquran:asmaquranReducers
});

export default allReducers;