import React from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser";
import styles from './userDetails.module.css'

const UserDetailsPage = () => {
    let {state: {data}} = useLocation();
    const user: IUser = data
    const {
        id,
        firstName,
        lastName,
        maidenName,
        username,
        image,
        email,
        gender,
        age,
        phone,
        ein,
        ip,
        ssn,
        userAgent,
        birthDate,
        height,
        eyeColor,
        role,
        macAddress,
        password,
        weight,
        university,
        bloodGroup
    } = user
    return (
        <div className={styles.userDetails}>
            <div><h1>ID: {id}</h1>
                <h2>{firstName} {lastName} {maidenName}</h2>
                <h3>{username}</h3>
                <img src={image} alt={username}/>
                <p>{email}</p>
                <p>Gender: {gender}</p>
                <p>Age: {age} year</p>
                <p>{phone}</p>
                <p>EIN: {ein}</p>
                <p>IP: {ip}</p>
                <p>SSN: {ssn}</p>
                <p>user Agent: {userAgent}</p>
                <p>B-day {birthDate}</p></div>
            <div>
                <p>Height: {height} cm </p>
                <p>Weight: {weight} kg</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Role: {role}</p>
                <p>Mac Address: {macAddress}</p>
                <p>Password: {password}</p>
                <p>University: {university}</p>
                <p>Blood Group: {bloodGroup}</p>
            </div>

        </div>
    );
};

export default UserDetailsPage;