import React, { Component } from 'react';

class CounterInterview extends Component {
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
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button></button>
      </div>
    )
  }
}

export default CounterInterview;
