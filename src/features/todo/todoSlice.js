import {createSlice,nanoid} from '@reduxjs/toolkit';

//initially what will be the store value will be
const initialState = {
    todoLists: JSON.parse(localStorage.getItem('todoLists')) || {},
  };



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const { listId, text } = action.payload;
            const todo = {
                id:nanoid(),
                text
            }
            if (!state.todoLists[listId]) {
                state.todoLists[listId] = [];
              }
              state.todoLists[listId].push(todo);
              localStorage.setItem('todoLists', JSON.stringify(state.todoLists));
            },

        },
        removeTodo:(state, action) => {
            const { listId, todoId } = action.payload;
            state.todoLists[listId] = state.todoLists[listId].filter(
              (todo) => todo.id !== todoId
            );
            localStorage.setItem('todoLists', JSON.stringify(state.todoLists));
          },
        // the todo is mapped from  the array of todos using find method which returns the id and map the todo id when it get from the payload
        updateTodo: (state, action) => {
            const { listId, todoId, text } = action.payload;
            state.todoLists[listId] = state.todoLists[listId].map((todo) =>
              todo.id === todoId ? { ...todo, text } : todo
            );
            localStorage.setItem('todoLists', JSON.stringify(state.todoLists));
          },
        },
      );


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