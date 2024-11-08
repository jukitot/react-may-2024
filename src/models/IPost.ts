export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}

export interface IReactions {
    likes: number;
    dislikes: number;
}