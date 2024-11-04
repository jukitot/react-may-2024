import React, {FC, useCallback, useEffect, useState} from 'react';
import './App.css';
import Menu from "./components/Menu";


function App(){
    let [number, setNumber] = useState<number>(0)

    useEffect(() => {
        console.log('app build')
    });

    const someFunc= useCallback(():void=>{
        console.log('asd');
    }, [])
  return (
      <>
          <Menu id={0} someFn={someFunc}/>
          <h2>{number}</h2>
        <button onClick={()=>{
            setNumber(++number)
        }}>increment</button>
      </>
  );
}

export default App;
