import React, {FC, useEffect, useState} from 'react';
import './App.css';

const App:FC = () => {
    let [number, setNumber] = useState<number>(0)

    useEffect(() => {
        console.log('connect to server, send to server', number);
        return () => {
            console.log('unconnect from server');
        }
    }, [number]);
  return (
      <>
          <h2>{number}</h2>
          <button onClick={()=>{
              setNumber(prevState => prevState+1)
          }}>increment</button>
          <button onClick={()=>{
              setNumber(prevState => prevState-1)
          }}>decrement</button>
      </>
  );
}

export default App;
