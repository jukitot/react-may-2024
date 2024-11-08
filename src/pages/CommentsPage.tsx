import React, {useEffect, useState} from 'react';
import {store, useAppDispatch, useAppSelector} from "../redux/store";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import {loadUsers} from "../redux/slices/UserSlice";

import PaginationComponent from "../components/Pagination/PaginationComponent";
import Comments from "../components/Comments/Comments";
import {loadComments} from "../redux/slices/CommentSlice";

const CommentsPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});


    let {comments} = useAppSelector(store=> store.commentSlice);
    let dispatch = useAppDispatch();
    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if (page) {
            apiService.comments
                .getAll(+page)
                .then(value => {
                    dispatch(loadComments(value.comments))
                    const lastId = value.comments[value.comments.length - 1].id;
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
            <Comments comments={comments}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default CommentsPage;