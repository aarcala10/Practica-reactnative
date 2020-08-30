import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../redux';

const globalReducers = combineReducers(reducers);
const store = createStore(globalReducers, applyMiddleware(thunk));

export default store;
