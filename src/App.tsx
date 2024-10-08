import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";

const App:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    },[])
  return (
      <>
          {users.map(({name, id}) => <div key={id}>  {id} -- {name} </div>)}
      </>
  );
}

export default App;
