import React from "react";

const Todo = props => {
  return (
    <li
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.task}
    </li>
  );
};

export default Todo;
