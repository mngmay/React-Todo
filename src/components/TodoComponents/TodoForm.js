import React from "react";

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form onSubmit={props.submitTodo}>
        <input
          type="text"
          value={props.todo}
          name="todo"
          onChange={props.handleChanges}
        />
        <button className="add-btn">Add Todo</button>
      </form>
      <button onClick={props.clearCompleted} className="completed-btn">
        Clear Completed
      </button>
    </div>
  );
};
export default TodoForm;
