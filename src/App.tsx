import React, {useEffect} from 'react';
import './App.css';
import {loadUser, loadUsers, removeUser, useAppDispatch, useAppSelector, userSlice} from "./redux/store";

function App() {
   let userSliceState = useAppSelector(store=>store.userSliceHimself);

   let dispatch = useAppDispatch();


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(loadUsers(users));
                // dispatch(removeUser(1))
            })
    }, []);
  return (

      <>
          {
              userSliceState.users.map((user)=>(<div>{user.username}</div>))
          }
      </>
  );
}

export default App;
