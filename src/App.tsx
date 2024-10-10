import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/User/UserComponent";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, [])

    const clickHandler = (id:number) => {
        console.log(id);
    }
    return (
        <>
            {users.map(({name, id, email, username}) =>
                <UserComponent key={id}
                               id={id}
                               name={name}
                               email={email}
                               username={username}
                               clickHandler={clickHandler}
                />)}
        </>
    );
}

export default App;
