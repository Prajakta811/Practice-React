import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true)
    function handleToggle()
    {
        setToggle((ele)=>!ele) 
    }
  return (
    <div>
     <h1>{toggle ? "Hello World!":""}</h1>
     <button onClick={handleToggle}>{toggle? "Hide":"Show"}</button> 
    </div>
  )
}

export default Toggle
