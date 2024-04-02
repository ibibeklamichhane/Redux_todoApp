import {React,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../features/todo/todoSlice";


function Todos() {
  const todos = useSelector(state => state.todos); //store bata sabai todos lai lerauxa yesle
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(""); // State to hold edited text
  const [editTodoId, setEditTodoId] = useState(null);


  const handleUpdateClick = (todo) => {
    setEditTodoId(todo.id); // Set the id of the todo being edited
    setEditText(todo.text); // Set the text of the todo being edited
  };

  const handleCancelClick = () => {
    setEditTodoId(null); // Reset the id of the todo being edited
    setEditText(""); // Reset the text of the todo being edited
  };
  const handleSaveClick = () => {
    dispatch(updateTodo({ id: editTodoId, text: editText }));
    setEditTodoId(null); // Reset the id of the todo being edited
    setEditText(""); // Reset the text of the todo being edited
  };
  const handleChange = (e) => {
    setEditText(e.target.value);
  };


  return (
    <>
      <div>Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex  justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
             {editTodoId === todo.id ? ( // Render edit form if editTodoId matches todo.id
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={handleChange}
                  autoFocus
                />
                <button
                  onClick={handleSaveClick}
                  className="text-white bg-green-500 border-0 py-1  focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  Cancel
                </button>
              </div>
            ) : (
            <div className="text-white">{todo.text}</div> )}
            <button
              onClick={() => handleUpdateClick(todo)}
              className="text-white bg-green-500 border-0 py-1  focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 opacity-0 transition-opacity duration-300 pointer-events-none">Update</span>
            </button>
            
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todos;
