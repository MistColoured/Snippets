/* eslint-disable */

// https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

import React, { Component } from 'react';
import axios from 'axios';

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(input.value)
      addTodo(input.value);
      input.value = '';
    }}
    >
      <input
      ref={(node) => {
          input = node;
        }}
      />
      <br />
    </form>
  );
};

const Todo = ({ todo, remove }) => (<a href="#" className="list-group-item" onClick={() => { remove(todo.id); }}>{todo.zztop}</a>);
const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => (<Todo todo={todo} key={todo.id} remove={remove} />));
  return (<div className="list-group" style={{ marginTop: '30px' }}>{todoNode}</div>);
};

// Container Component
// Todo Id
// window.id = 0;
class TodoApp extends Component {
  apiUrl = 'https://5b5f35c58e9f160014b88dce.mockapi.io/api/todos';

  state = {
    data: [],
  };


  // Lifecycle method
  componentDidMount() {
    // Make HTTP request with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        console.log(res);
        // Set state with result
        this.setState({ data: res.data });
      });
  }

  // Add todo handler
  addTodo = (val) => {
    // Assemble data
    const todo = { zztop: val };
    console.log('1. for pushing', todo)
    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
        console.log('2. res::', res)
        console.log('3. pushing the res', res.data)
        this.state.data.push(res.data);
        this.setState({ data: this.state.data });
      });
  }

  // Handle remove
  handleRemove = (id) => {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(`${this.apiUrl}/${id}`)
      .then((res) => {
        this.setState({ data: remainder });
      });
  }

  render() {
    // Render JSX
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;
