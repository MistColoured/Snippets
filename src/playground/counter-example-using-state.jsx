import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CounterInterview extends Component {
  constructor(props) {
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 107,
    };
  }
  handlePlus() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  handleMinus() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  handleReset() {
    this.setState(() => ({
      count: 107,
    }));
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

ReactDOM.render(<CounterInterview />, document.getElementById('app'));

