import React, {FC, useRef} from 'react';
import './App.css';
import UseRefComponent2 from "./UseRefComponent2";

const App:FC = () => {
    const customRef = useRef<HTMLInputElement>(null);
  return (
      <>
          <input ref={customRef} type="text"/>
          <button onClick={()=>{
              console.log(customRef.current)
          }}>click me</button>

          <UseRefComponent2/>
      </>
  );
}

export default App;
