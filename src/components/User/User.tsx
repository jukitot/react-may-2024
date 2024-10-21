import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
import styles from './user.module.css'

type UserProps = {
    user: IUser
}
const User: FC<UserProps> = ({user}) => {
    const {id, firstName, lastName, username, maidenName, phone, email, gender, image} = user
    return (
        <div className={styles.userBlock}>
            <h3>ID:{id}</h3>
            <h4>{firstName} {lastName} {maidenName}</h4>
            <h5>{username}</h5>
            <p>{phone}</p>
            <p>{email}</p>
            <p>Gender: {gender}</p>
            <img src={image} alt=""/>
            <br/>
            <Link state={{data: user}} to={user.id.toString()}>
                <button className={styles.userButton}>More info</button>
            </Link>
        </div>
    );
};

export default User;