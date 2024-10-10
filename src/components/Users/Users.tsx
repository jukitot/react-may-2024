import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import User from "../User/User";
import './users.css'

type IUsersProps = {
    lift: (user: IUser) => void
}

const Users: FC<IUsersProps> = ({lift}) => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers()
            .then((response: IUser[]) => {
                setUsers(response)
            })
    }, []);

    return (
        <div className={'flex'}>
            {
                users.map((user: IUser) => <User key={user.id} lift={lift} user={user}/>)
            }
        </div>
    );
};

export default Users;