import React, { useEffect, useState } from 'react'

const Api_Fetch = () => {
  const[serachValue,setSearch]=useState("")
  
   const [data,setData]=useState([])
   useEffect(()=>{
    fetchData()
   },[])
    async function fetchData(){
        try {
            const responce=await fetch("https://jsonplaceholder.typicode.com/users")
            const res=await responce.json()
            console.log(res)
            setData(res)
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log(data)
  return (
    <>
    <input type="text" placeholder='Search Here' value={serachValue} name="" onChange={handleChange}/>

    <div className='apiBox'>
      {data.map((item)=>(
        <div>
            <h2>{item.name}</h2>
            <p>{item.address.street + item.address.suite + item.address.city}</p>
            <h4>Company:{item.company.name}</h4>
        </div>
      ))}
    </div>
    </>
  )
}

export default Api_Fetch
