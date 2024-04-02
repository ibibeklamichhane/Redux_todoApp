function UpdateTodo({ todo }) {
    const [input, setInput] = useState(todo.text);
    const dispatch = useDispatch();
  
    const updateTodoHandler = (e) => {
      e.preventDefault();
      dispatch(updateTodo({ id: todo.id, text: input }));
      setInput('');
    };
  
    return (
      <form onSubmit={updateTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Update Todo</button>
      </form>
    );
  }