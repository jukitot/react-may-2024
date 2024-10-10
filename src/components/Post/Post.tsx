import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import './post.css'

type IPostProps = { post: IPost }

const Post: FC<IPostProps> = ({post}) => {
    let {id, tags, title, userId, views, reactions, body} = post

    return (
        <div className={'box-post'}>
            <h1>Post ID: {id}</h1>
            <h2>User ID: {userId}</h2>
            <h2>Title: {title}</h2>
            <p>Views: {views}</p>
            <p>{body}</p>
            <p>
                Likes: {reactions.likes}
               <br/>
                Dislikes: {reactions.dislikes}</p>
            <p>Tags: {tags.map((tag, index) => <span key={index}> {tag} </span>)}</p>
        </div>
    );
};

export default Post;