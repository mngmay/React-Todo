import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}
export default TodoForm;
