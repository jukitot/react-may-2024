import React, {FC, useReducer} from 'react';
import './App.css';
type Action = {type: string, payload: number}
const reducerActions = (state:number, action:Action)=>{
    switch (action.type) {
        case 'add':
            state = state+action.payload;
            return state;
        case 'getBack':
            state=state-action.payload;
            return state;
        default:
            return state;
    }

}
const App:FC = () => {
    const [number, dispatch] = useReducer(reducerActions, 0)
  return (
      <>
          <h2>{number}</h2>
          <button onClick={()=>{
              dispatch( {type: 'add', payload: 1})
          }}>icrem</button>
          <button onClick={()=>{
              dispatch( {type: 'getBack', payload: 100})
          }}>dercem</button>
      </>
  );
}

export default App;
