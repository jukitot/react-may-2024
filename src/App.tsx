import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector, userSliceActions} from "./redux/store";


function App() {
   let {users,user} = useAppSelector(state=>state.userReducer);
   let dispatch = useAppDispatch();


    useEffect(() => {
                // dispatch(userSliceActions.loadUsers());
                // dispatch(removeUser(1))
        dispatch(userSliceActions.loadUser(1));

    }, []);
  return (

      <>
          {
              users.map((user)=>(<div>{user.username} {user.id}</div>))
          }
          {user && <div>{JSON.stringify(user)}</div>}
      </>
  );
}

export default App;
