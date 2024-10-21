import React, {useEffect, useState} from 'react';
import Users from "../components/Users/Users";
import PaginationComponent from "../components/Pagination/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";

const UsersPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);

    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        const page = query.get('page')
        if (page) {
            apiService.users
                .getAll(+page)
                .then(value => {
                    setUsers(value.users)
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