const TodoItem = (props) => {
  return (
    <li>
      {props.todo}
      <button onClick={() => props.removeTodo(props.todo)}>Remove</button>
    </li>
  );
};

export default TodoItem;
