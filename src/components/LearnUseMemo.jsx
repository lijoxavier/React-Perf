import React, { useMemo, useState } from 'react'

const LearnUseMemo = () => {
// 1  const [count,setCount]=useState(0)
const [count,setCount]=useState(0)
const [num,setNum] = useState(2)

    function fibonacci(num){
        console.log("fibonacci fn called");
        if(num<=1) return 1;
        return fibonacci(num-1) + fibonacci(num-2);
    }

    const fibNum = useMemo(()=>{
        return fibonacci(num);
    },[num]);
    
  return (
    <div>LearnUseMemo
        <hr />
        <h2>Fibnum is {fibNum}</h2>
        <hr />
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
        <button onClick={()=>setNum((prev)=>prev+1)}>Change Num - {num}</button>
    </div>
  )
}

export default LearnUseMemo