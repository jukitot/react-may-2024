import React, {FC, useState} from 'react';
import {IPost} from "../../models/IPost";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {apiService} from "../../services/api.service";
import {loadComments} from "../../redux/slices/CommentSlice";
import styles from './post.module.css'

type PostProps = {
    post: IPost
}
const Post: FC<PostProps> = ({post}) => {
    const {
        id,
        title, body, tags, views, userId, reactions
    } = post

    let {comments} = useAppSelector(store => store.commentSlice);
    comments = comments.filter(comment => comment.postId === id);

    let dispatch = useAppDispatch();

    const [isCommentsVisible, setIsCommentsVisible] = useState(false)

    const showComments = async () => {
        if (!isCommentsVisible) {
            const commentsData = await apiService.posts.getComments(id);
            dispatch(loadComments(commentsData.comments))
        }
        setIsCommentsVisible(!isCommentsVisible)
    }
    return (
        <div className={styles.postBlock}>
            <h1>ID: {id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <p><b>Tags:</b> {tags.map((tag, index) => <span key={index}>{tag} </span>)}</p>
            <p><b>Views: </b> {views}</p>
            <button className={styles.postButton}
                    onClick={showComments}>{isCommentsVisible ? 'Close Comments' : 'Show Comments'}</button>
            {isCommentsVisible && (
                <div className={styles.commentsBlock}>
                    {comments.map((comment) =>
                        <div key={comment.id} className={styles.postCommentBlock}>
                            <h3>Id: {comment.id}</h3>
                            <p>{comment.body}</p>
                            <p><b>Likes: </b> {comment.likes}</p></div>)}
                </div>
            )}
        </div>
    );
};

export default Post;