import fetch from 'isomorphic-fetch';
const options = {

};
export function getIssuesById() {
    return fetch('https://api.github.com/repos/TeamWorkEpam/Alpha/issues/2', options)
        .then((r) => r.json())
}
export function getIssues() {
    return fetch('https://api.github.com/repos/TeamWorkEpam/Alpha/issues', options)
        .then((r) => r.json())
}

