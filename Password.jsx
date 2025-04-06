import React, { useState } from 'react'
import { Eye,EyeOff } from 'lucide-react';
const Password = () => {
    const[passcode,setPassword]=useState("")
    const[toggle,setToggle]=useState(false)

    function handleChange(event)
    {
        const name=event.target.value;
        setPassword(name)
    }
    function handlePassword(){
        setToggle((ele)=>!ele)
       
    }
  return (
    <div>
      <input type={toggle? "text":"password"} placeholder='Enter Your Password' onChange={handleChange} className='passWord'/>
      <span onClick={handlePassword}>{(toggle && passcode)?<EyeOff />:<Eye />}</span>
    </div>
  )
}

export default Password
