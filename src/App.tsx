import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Menu from "./components/Menu";


function App(){
    let [number, setNumber] = useState<number>(0)

    useEffect(() => {
        console.log('app build')
    });
  return (
      <>
          <Menu id={number}/>
          <h2>{number}</h2>
        <button onClick={()=>{
            setNumber(++number)
        }}>increment</button>
      </>
  );
}

export default App;
