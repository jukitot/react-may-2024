import React, {FC} from 'react';
import './App.css';
import {useFetch} from "./Hooks/useFetch";

const App:FC = () => {
    const users = useFetch();
  return (
      <>
          {
              users.map((user)=>(<div>{user.name}</div>))
          }
      </>
  );
}

export default App;
