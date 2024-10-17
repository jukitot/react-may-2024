import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import styles from './comment.module.css'

type CommentProps = {
    comment: IComment;
}
const Comment: FC<CommentProps> = ({comment}) => {
    const {id, name, postId, email, body} = comment;
    return (
        <div className={styles.comment}>
            <h1>Comment ID: {id}</h1>
            <h2>Post ID: {postId}</h2>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{body}</p>

        </div>

    );
};

export default Comment;