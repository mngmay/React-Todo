import React from "react";

const Todo = props => {
  return (
    <p
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.task}
    </p>
  );
};

export default Todo;
