import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

import User from "../User/User";
import styles from './users.module.css'

type UsersProps = {
    users: IUser[]
}
const Users: FC<UsersProps> = ({users}) => {
    return (
        <div className={styles.usersBlock}>
            {users.map(user => (<User user={user} key={user.id}/>))}
        </div>
    );
};

export default Users;