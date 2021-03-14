import { combineReducers } from 'redux';
import asmaquranReducers from './DataAsmaQuran';
import Sort99names from './Reducers';

const allReducers = combineReducers({
    asmaquran: asmaquranReducers,
    Sort99names: Sort99names,
});

export default allReducers;