import React, { Component } from 'react';

class CounterInterview extends Component {
  state = {
    count: 0
  }
  handlePlus = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  handleMinus = () => {
    console.log('Minus');
  }
  handleReset = () => {
    console.log('Reset');
  }
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default CounterInterview;