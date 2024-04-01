import {createSlice,nanoid} from '@reduxjs/toolkit';

//initially what will be the store value will be
const initialState = {
    todos:[{id:1,text:"Hello  World"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)

        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) //id will be sent and if the sent id by payload matched it is filtered and then all remaining are shown
        },
        updateTodo : (state,action) =>{

        }
    }
 
})

export const{addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer