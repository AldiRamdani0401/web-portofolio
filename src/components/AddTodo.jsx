import { createSignal } from 'solid-js';

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo().trim()) {
      props.addTodo(newTodo());
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo()}
        onInput={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
