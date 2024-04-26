import React, { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, removeTodo, updatedTodo } from './Config/redux-config/reducrs/todoSlice';

const App = () => {
  const todoRef = useRef();

  const dispatch = useDispatch();
  const selector = useSelector(state=>state.todos);

  console.log(selector);

  const addingTodo = (event) =>{
    event.preventDefault();
    dispatch(addTodo({
      title: todoRef.current.value
    }))
  }

  const deleteTodo = (index) =>{
    console.log(index);
    dispatch(removeTodo({
      index: index
    }))
  }

  const updateTodo = (index) =>{
    const value = prompt('Enter value to update: ')
     dispatch(updatedTodo({
      index: index,
      updatedValue : value
     }))   
  }
  return (
     <>
       <h1 className='text-center mt-20 text-5xl text-blue-500'>Todo App</h1> 

        <form onSubmit={addingTodo}>
            <input className='mt-20 ml-[35%] border-stone-900 w-1/4 py-1' type='text' placeholder=' Enter Todo' ref={todoRef}/>
            <button className='ml-0.5 bg-slate-400 px-4 py-1 rounded-sm' type='submit'>Add</button>
        </form>

      {selector.map((item, index) =>{
            return <div key={item.id} className='flex flex-wrap justify-center mt-10 gap-5 '><b>Title:</b> {item.title}
                     <div><button onClick={()=>deleteTodo(index)} className='bg-red-700 ml-10 px-3 py-0.5 rounded-sm'>Delete</button></div>
                     <div><button onClick={()=>updateTodo(index)}className='bg-green-700 px-3 py-0.5 rounded-sm'>Edit</button></div>  
                   </div>
      })}     
     </>  
  )
}

export default App