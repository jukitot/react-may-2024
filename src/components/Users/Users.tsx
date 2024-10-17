import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.services";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map((user: IUser) => (<User user={user} key={user.id}/>))
            }
        </div>
    );
};

export default Users;