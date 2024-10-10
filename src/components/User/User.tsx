import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './user.css'

type IUserProps = { user: IUser; lift: (user: IUser) => void }

const User: FC<IUserProps> = ({user, lift}) => {
    const {id, firstName, lastName, maidenName, age, gender, email, image, username, phone, birthDate} = user

    return (
        <div className={'box'}>
            <h1>ID: {id}</h1>
            <h2>{firstName} {lastName} {maidenName}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <img src={image} alt=""/>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
            <p>Birthday: {birthDate}</p>
            <button className={'btn'} onClick={() => {
                lift(user)
            }}>Click!
            </button>
        </div>
    );
};

export default User;