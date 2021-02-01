import React from "react";
import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({ todos: res.data });
    });
  }

  render() {
    return (
      <div data-test-id="todolist">
        <h3>TodoList</h3>
        {this.state.todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
