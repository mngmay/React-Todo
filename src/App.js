import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Search from "./components/Search";

import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data,
      todo: "",
      search: ""
    };
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Search search={this.state.search} handleChanges={this.handleChanges} />
        <TodoList
          todos={this.state.todos}
          search={this.state.search}
          toggleTodo={this.toggleTodo}
        />
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          handleChanges={this.handleChanges}
          todo={this.state.todo}
          submitTodo={this.submitTodo}
        />
      </div>
    );
  }
}

export default App;
