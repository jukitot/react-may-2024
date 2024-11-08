import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import styles from './comment.module.css';

type CommentProps = {
    comment: IComment
}
const Comment: FC<CommentProps> = ({comment}) => {
    const {id, body, user, likes, postId} = comment;

    return (
        <div className={styles.commentBlock}>
            <h1>ID: {id}</h1>
            <p>{body}</p>
            <p><b>Likes: </b>{likes}    &hearts;</p>
            <h2>User:</h2>
            <p>User id:{user.id}</p>
            <p>Username: {user.username}</p>
        </div>
    );
};

export default Comment;