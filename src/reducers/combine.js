import{combineReducers} from "redux";
import namesReducers from "./reducers_99names";
import asmaquranReducers from "./reducers_asmaquran";

const rootReducers =combineReducers({
    names : namesReducers,
    asmaquran:asmaquranReducers
});

export default rootReducers;