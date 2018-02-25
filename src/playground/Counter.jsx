import React, { Component } from 'react';

class CounterInterview extends Component {
  state = {
    count: 0,
  }
  handlePlus = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default CounterInterview;
