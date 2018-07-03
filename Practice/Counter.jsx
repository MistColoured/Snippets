import React, { Component } from 'react';

class CounterInterview extends Component {
  state = {
    count: 27,
  }

  handlePlus = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  handleMinus = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  handleReset = () => {
    this.setState(() => ({
      count: 27,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handlePlus}>
          +
        </button>
        <button onClick={this.handleMinus}>
          -
        </button>
        <button onClick={this.handleReset}>
          Reset
        </button>
        {count}
      </div>
    );
  }
}

export default CounterInterview;
