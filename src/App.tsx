import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {defaultStoreValue, MyContext} from "./MyContexProvider";
import {IUser} from "./models/IUser";
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

const App:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value.users)
            })
    }, []);
  return (
      <>
          <HeaderComponent/>
          <MyContext.Provider value={{
              userSlice:{
                  allUsers:users,
                  user: null
              }
          }}>
              <Outlet/>

          </MyContext.Provider>

      </>
  );
}

export default App;
