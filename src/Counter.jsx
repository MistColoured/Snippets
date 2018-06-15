import React, { Component } from 'react';

class CounterInterview extends Component {
  state = {
    count: 15,
  };
  handlePlus = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePlus}>{this.state.count}</button>
      </div>
    );
  }
}

export default CounterInterview;
