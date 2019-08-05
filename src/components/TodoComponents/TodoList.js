// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  if (props.todos.length < 1) {
    return "There are no tasks to complete";
  } else {
    return (
      <div className="todo-list">
        {props.todos.map(todo => {
          if (todo.task.toLowerCase().includes(props.search.toLowerCase())) {
            return (
              <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
};

export default TodoList;
