import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './post.module.css'

type PostProps = {
    post: IPost;
}
const Post: FC<PostProps> = ({post}) => {

    const {id, body, userId, title} = post;
    return (
        <div className={styles.post}>
            <h1>ID: {id}</h1>
            <h4>User ID: {userId}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;