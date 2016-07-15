import {getIssues, getIssuesById} from '../api';

export function  loadIssues () {
    return {
        type: 'PROMISE',
        actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
        promise: getIssues(),
    };
}
export function  loadIssuesById () {
    return {
        type: 'PROMISE',
        actions: ['ISSUES_LOADING', 'ISSUES_BY_ID_LOADING', 'ISSUES_LOAD_FAILURE'],
        promise: getIssuesById(),
    };
}