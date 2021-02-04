import { combineReducers } from 'redux';
import asmaquranReducers from './DataAsmaQuran';
import Sort99names from './Data99Names';

const allReducers = combineReducers({
    asmaquranReducers,
    Sort99names,
});

export default allReducers;