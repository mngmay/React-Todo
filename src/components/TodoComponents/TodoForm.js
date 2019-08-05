import React from "react";

const TodoForm = props => {
  return (
    <>
      <form onSubmit={props.submitTodo}>
        <input
          type="text"
          value={props.todo}
          name="todo"
          onChange={props.handleChanges}
        />
        <button>Add Todo</button>
      </form>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </>
  );
};
export default TodoForm;
