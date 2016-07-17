import counter from './reducersCounter';


export function issues(state = [], action) {
    switch (action.type) {
        case 'ISSUES_LOADED':
            return action.data;
        case 'CLEAR_ISSUES':
            return state = [];
        default:
            return state
    }
}
export function issuesById(state = [], action) {
    switch (action.type) {
        case 'ISSUES_BY_ID_LOADING':
            return action.data;
        default:
            return state
    }
}


export {counter};
