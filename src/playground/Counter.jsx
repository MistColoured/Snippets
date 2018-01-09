import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 107
  }
  handlePlus = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  handleMinus = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }
  handleReset = () => {
    this.setState(() => ({
      count: 107
    }))
  }
  render() {
    const { count } = this.state
    return (
      <div>
        Count: {count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;