import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {apiService} from "../services/api.service";
import {loadPosts} from "../redux/slices/PostSlice";

import PaginationComponent from "../components/Pagination/PaginationComponent";
import Posts from "../components/Posts/Posts";

const PostsPage = () =>{
    const [query, setQuery] = useSearchParams({page: '1'});


let {posts} = useAppSelector(store=> store.postSlice);
let dispatch = useAppDispatch();
const [flag, setFlag] = useState<boolean>(false)

useEffect(() => {
    const page = query.get('page')
    if (page) {
        apiService.posts
            .getAll(+page)
            .then(value => {
                dispatch(loadPosts(value.posts))
                const lastId = value.posts[value.posts.length - 1].id;
                if (lastId >= value.total) {
                    setFlag(true)
                } else {
                    setFlag(false)
                }
            })
    }
}, [query]);
return (
    <div>
        <Posts posts={posts}/>
        <PaginationComponent flag={flag}/>
    </div>
);
};

export default PostsPage;