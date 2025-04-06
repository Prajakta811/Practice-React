import React, { useState } from 'react'

const Randomcolor = () => {
    const[colors,setColor]=useState(null)

    function handleColor(){
    let colorss= "#"+ Math.floor((Math.random()*16777215)).toString(16).padStart(6,"0")

        setColor(colorss)
        document.body.style.backgroundColor=colorss;
    }
  return (
    <div style={{backgroundColor:colors}} className='divs'>
     <button onClick={handleColor}>Change Color</button>
    </div>
  )
}

export default Randomcolor
