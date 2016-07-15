import React from 'react';
import App from './containers/App';
import {Provider} from 'react-redux';
import store from './state';



React.render(
    <Provider store={store}>
        { () => <App/> }
    </Provider>, document.getElementById('root'));


console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER'
});
console.log(12);
store.dispatch({
    type: 'INCREASE_COUNTER'
});
