import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './posts.css'
import Post from "../Post/Post";

type IPostsProps = {
    posts: IPost[];
}

const Posts: FC<IPostsProps> = ({posts}) => {

    return (
        <div className={'flex-posts'}>
            {posts?.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;