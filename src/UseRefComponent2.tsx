import React, {useEffect, useRef, useState} from 'react';

const UseRefComponent2 = () => {
    let [number, setNumber] = useState<number>(0)

    const anotherNum = useRef<number>(0)

    useEffect(() => {
        console.log(anotherNum)
    }, [number]);
    return (
        <div>
            <h2>{number}</h2>

            <button onClick={()=>{
                setNumber(++number)
            }}>left</button>

            <button onClick={()=>{
                setNumber(--number)
                console.log(anotherNum.current++)
                console.log(anotherNum)
            }}>right</button>
        </div>
    );
};

export default UseRefComponent2;