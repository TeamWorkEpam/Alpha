import React from 'react';
import App from './containers/App';
import store from './state';
import {getIssues} from './api';


React.render(<App/>, document.getElementById('root'));

store.subscribe(() =>
    console.log('new state', store.getState()));


console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER'
});
console.log(12);
store.dispatch({
    type: 'INCREASE_COUNTER'
});
console.log(13);
store.dispatch({
    type: 'INCREASE_COUNTER'
});
console.log(16);
store.dispatch({
    type: 'RESET_COUNTER'
});
console.log(18);
store.dispatch({
    type: 'UNKNOWN'
});
console.log(18);
store.dispatch({
    type: 'ISSUES_LOADED',
    payload: [{id: 1, name: 'firstIssues'}]
});

store.dispatch({
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
    promise: getIssues(),
});