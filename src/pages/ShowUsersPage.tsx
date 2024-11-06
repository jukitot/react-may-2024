import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {useStore} from "../store/store";

const ShowUsersPage = () => {
    let {userSlice:{loadUsers}} = useStore();
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => loadUsers(value.users))
    }, []);
    let {userSlice:{allUsers}} = useStore();
    return (
        <div>
            {allUsers.map((user)=><div>{user.firstName}</div>)}
        </div>
    );
};

export default ShowUsersPage;