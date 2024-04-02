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
        // the todo is mapped from  the array of todos using find method which returns the id and map the todo id when it get from the payload
        updateTodo : (state,action) =>{

            const {id, text} = action.payload;
            state.todos = state.todos.map((todo) =>
            todo.id === id? {...todo,text}:todo)
        } 
    }
 
})

export const{addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer


/* 
updateTodo: (state, action) => {
  const { id, text } = action.payload;
  state.todos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text } : todo
  );
}
*/
/*
dispatch(updateTodo({ id: 'todo-id', text: 'Updated todo text' })); 
*/