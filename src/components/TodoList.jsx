import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo} todo={todo} removeTodo={props.removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
