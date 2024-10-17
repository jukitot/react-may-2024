import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.services";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {
                posts.map((post: IPost) => (<Post post={post} key={post.id}/>))
            }
        </div>
    );
};

export default Posts;