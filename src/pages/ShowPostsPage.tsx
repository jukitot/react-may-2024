import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {useStore} from "../store/store";

const ShowPostsPage = () => {
    let {postSlice:{loadPosts}} = useStore();
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(value => value.json())
            .then(value => loadPosts(value.posts))
    }, []);
    let {postSlice:{allPosts}} = useStore();
    return (
        <div>
            {allPosts.map((post)=><div>{post.title}</div>)}
        </div>
    );
};

export default ShowPostsPage;