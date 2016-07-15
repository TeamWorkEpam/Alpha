import fetch from 'isomorphic-fetch';

export function getIssues() {
    return fetch('https://api.github.com/repos/TeamWorkEpam/Alpha/issues')
        .then((r) => r.json())
}

