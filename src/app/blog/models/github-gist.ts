
export class GithubGistFile {
    filename: string;
    type: string;
    language?: any;
    raw_url: string;
    size: number;
}
export interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GithubGist {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: { [fileName: string]: GithubGistFile }
    public: boolean;
    created_at: Date;
    updated_at: Date;
    description: string;
    comments: number;
    user?: any;
    comments_url: string;
    owner: GithubUser;
    truncated: boolean;
    // Not from initial api, based on initial api
    content: string;
}


