export interface Issue {
    id: number;
    url: string;
    comments_url: string;
    title: string;
    state: string;
    comments: number;
    body: string;
    user: User;
    commentsList: Comment;
}

export interface Comment {
    id: number;
    url: string;
    body: string;
    user: string;
    created_at: Date | string;
    updated_at: Date | string;
}

export interface User {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
}
