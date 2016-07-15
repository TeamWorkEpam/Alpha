import fetch from 'isomorphic-fetch';
const options = {
    // method: 'POST',
    // body: {
    //     "title": "Found a bug",
    //     "body": "I'm having a problem with this.",
    //     "assignee": "octocat",
    //     "assignees": [
    //         {
    //             "login": "octocat",
    //             "id": 1,
    //             "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    //             "gravatar_id": "",
    //             "url": "https://api.github.com/users/octocat",
    //             "html_url": "https://github.com/octocat",
    //             "followers_url": "https://api.github.com/users/octocat/followers",
    //             "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    //             "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    //             "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    //             "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    //             "organizations_url": "https://api.github.com/users/octocat/orgs",
    //             "repos_url": "https://api.github.com/users/octocat/repos",
    //             "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    //             "received_events_url": "https://api.github.com/users/octocat/received_events",
    //             "type": "User",
    //             "site_admin": false
    //         }
    //     ],
    //     "milestone": 1,
    //     "labels": [
    //         "bug"
    //     ]
    // }
};
export function getIssuesById() {
    return fetch('https://api.github.com/repos/TeamWorkEpam/Alpha/issues/2', options)
        .then((r) => r.json())
}
export function getIssues() {
    return fetch('https://api.github.com/repos/TeamWorkEpam/Alpha/issues', options)
        .then((r) => r.json())
}

