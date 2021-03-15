import { combineReducers } from 'redux';
import asmaquranReducers from './DataAsmaQuran';
import Sort99names from './RootReducers';
import users from './UserReducers';

const allReducers = combineReducers({
    asmaquranReducers,
    Sort99names,
    users,
});

export default allReducers;