import React from 'react'
import { forwardRef } from 'react'

// const MyInput = () => {
//   return (
//     <div>MyInput</div>
//   )
// }

const NewInput=forwardRef((props,ref)=>{
    return (
        <input type="text" ref={ref} />
    )
})

export default NewInput