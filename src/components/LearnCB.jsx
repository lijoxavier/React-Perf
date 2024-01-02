import React, { useCallback, useState } from 'react'
import Child1 from './Child1';

const LearnCB = () => {
    const [num,setNum]=useState(5);

    const handleByTen = useCallback(() => {
      setNum((prev) => prev + 10);
    },[]);

  return (
    <div>
        <h1>Number is {num}</h1>
        <button onClick={()=>setNum((prev)=>prev+1)}>increase by 1</button>
        <Child1 handleByTen={handleByTen}/>
    </div>
  )
}

export default LearnCB