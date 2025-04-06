import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
 function hanldeClick(){
    setCount((ele)=>ele+1)
 }
 function hanldeDecrement(){
    setCount((ele)=>ele>0?(ele-1):0)
 }
 function handleReset(){
    setCount(0)
 }
  return (
    <div>
        <h1>Count:{count}</h1>
      <button onClick={hanldeClick}>Start</button>
      <button onClick={hanldeDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
