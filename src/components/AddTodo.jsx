import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch} from  "react-redux";
import {addTodo} from "../features/todo/todoSlice"

//Dispatch reducer ko use garera store ma changes garxa

function AddTodo({ listId }) {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

// Empty dependency array to ensure this effect runs only once, when the component mounts

    const addTodoHandler = (e) => {
        e.preventDefault() 
        dispatch(addTodo({ listId, text: input }));

        //input value from down is passed to aadd
        // action creater  ma input ki value se data pass karna ha

        setInput('')     //after adding the todo clear the input

        // Save the added todo to local storage

  
    };


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit" 
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
  )
}

export default AddTodo