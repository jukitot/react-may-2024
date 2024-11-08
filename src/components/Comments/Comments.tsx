import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import Comment from "../Comment/Comment";
import styles from './comments.module.css'

type CommentsProps = {
    comments: IComment[]
}
const Comments: FC<CommentsProps> = ({comments}) => {
    return (
        <div className={styles.commentsBlock}>
            {
                comments.map((comment) => (<Comment comment={comment} key={comment.id}/>))
            }
        </div>
    );
};

export default Comments;