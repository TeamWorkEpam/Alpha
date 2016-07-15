import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import createLogger from 'redux-logger';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    promisesMiddleware,
    logger
)(createStore);

const store = createStoreWithMiddleware(reducer, {
    issues: [],
    issuesById: [],
    repository: '',
    counter: 0,
});

export default store;