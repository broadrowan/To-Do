import { useRef } from "react";

function TodoForm(props) {
  const { addTodo } = props;
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <br></br><h1>Add a new task!</h1><br></br><br></br>

      <input class="input"
        type="text"
        ref={inputRef}
        placeholder="What needs to be done?"
      />

      <br></br>
      <br></br>
      <button class="submit" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;