import { combineReducers } from 'redux';
import asmaquranReducers from './reducers_asmaquran';
import Sort99name from './reducers_action99names';

const allReducers = combineReducers({
    asmaquran: asmaquranReducers,
    Sort99names: Sort99name,
});

export default allReducers;