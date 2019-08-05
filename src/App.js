import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      listdata: data
    };
  }

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listdata: [...this.state.listdata, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listdata={this.state.listdata} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
