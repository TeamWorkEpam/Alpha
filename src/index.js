import React from 'react';
import App from './containers/App';
import store from './state';

React.render(<App/>, document.getElementById('root'));

store.subscribe(() =>
    console.log('new state', store.getState()));


console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER'
})
console.log(12);
store.dispatch({
    type: 'INCREASE_COUNTER'
})
console.log(13);
store.dispatch({
    type: 'INCREASE_COUNTER'
})
console.log(16);
store.dispatch({
    type: 'RESET_COUNTER'
})
console.log(18);
store.dispatch({
    type: 'UNKNOW'
})