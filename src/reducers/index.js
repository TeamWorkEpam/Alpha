import counter from './reducersCounter';


export function issues(state = [], action) {
    switch (action.type) {
        case 'ISSUES_LOADED':
            return action.payload;
        default:
            return state
    }
}

export {counter};
