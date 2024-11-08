import React, {useEffect, useState} from 'react';
import Users from "../components/Users/Users";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";

import {apiService} from "../services/api.service";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {loadUsers} from "../redux/slices/UserSlice";

const UsersPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    ///add store
    let {users} = useAppSelector(store => store.userSlicer);
    let dispatch = useAppDispatch();
    ///

    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if (page) {
            apiService.users
                .getAll(+page)
                .then(value => {
                    dispatch(loadUsers(value.users))
                    const lastId = value.users[value.users.length - 1].id;
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
            <Users users={users}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default UsersPage;