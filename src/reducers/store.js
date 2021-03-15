import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './combine';
const persistConfig = {
    key: 'root',
    storage,
};

const store = createStore(persistReducer(persistConfig, allReducers));
const persistor = persistStore(store);
export { store, persistor };