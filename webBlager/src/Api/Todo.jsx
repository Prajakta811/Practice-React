import React, { useState } from 'react'

const Todo = () => {
    const[todo,setTodo]=useState("")
    const[todos,setTodos]=useState([])
    function handleChange(event){
        const nameTodo=event.target.value;
        setTodo(nameTodo)
    }
    function handleSubmit(event){
        event.preventDefault()
        if(todo.trim()=="")return
        setTodos([...todos,{text:todo,complete:false}])
        setTodo("")
    }
    function handleDelete(id)
    {
       const filterdata= todos.filter((_,index)=>index!==id)
        setTodos(filterdata)
    }
    function hanldeComplete(id){
        ///strikeThrough
        let updatedData=todos.map((item,index)=>index==id ? {...item,complete:true}:item)
        setTodos(updatedData)
    }
    function handleClear()
    {
        setTodos([]) 
    }
    function handleUpdate(){
       
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder='Enter Your Todo' onChange={handleChange} value={todo}/>
      <input type="text" name='' placeholder='Update Your todo' onChange={handleUpdate} />
      <button type='submit'>Submit</button>
      {todos.map((item,index)=>(
        <div>
            <h1 style={{textDecoration:item.complete ? "line-through":"none"}}>{item.text}</h1>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            <button onClick={()=>handleComplete(index)}>Complete</button>
        </div>
      ))}
            <button onClick={handleClear}>Clear All </button>

      </form>
    </div>
  )
}

export default Todo
