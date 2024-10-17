import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './user.module.css'

type UserProps = {
    user: IUser;
}
const User: FC<UserProps> = ({user}) => {
    const {id, name, email, username, phone, address, company, website} = user;
    return (
        <div className={styles.user}>
            <h1>ID: {id}</h1>
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address.city} {address.street} {address.zipcode}</p>
            <p>{company.name} {company.bs} {company.catchPhrase}</p>
            <a href={website}>{website}</a>
        </div>
    );
};

export default User;