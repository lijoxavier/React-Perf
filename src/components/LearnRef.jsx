import React, { useRef, useState } from 'react'
import MyInput from './MyInput';
import NewInput from './MyInput';

const LearnRef = () => {
  // const [count,setCount]=useState(0);
    // const numberRef = useRef(1);
    // numberRef.current+=1;
    // console.log("component rendered",numberRef.current,"times");

    const inputRef = useRef(null);
    const handleFocus=()=>{
      inputRef.current.focus();
    }
  return (
    <div>LearnRef <hr />
        {/* {numberRef.current} */}
        {/* <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button> */}
        {/* <input type="text" ref={inputRef} /> */}
        <NewInput ref={inputRef}/><br />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default LearnRef