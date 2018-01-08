import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${this.state.value}`);
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
