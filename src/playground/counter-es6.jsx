import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  state = {
    count : 12,
  }
  handleAdd = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  handleMinus = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };
  handleReset = () => {
    this.setState(() => ({
      count: 0
    }));
  };
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
