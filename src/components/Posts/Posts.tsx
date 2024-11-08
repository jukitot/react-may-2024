import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../Post/Post";
import styles from './posts.module.css'

type PostsProps = {
    posts: IPost[]
}
const Posts: FC<PostsProps> = ({posts}) => {
    return (
        <div className={styles.postsBlock}>
            {
                posts.map((post) => (<Post post={post} key={post.id}/>))
            }
        </div>
    );
};

export default Posts;