import React, { Component } from 'react';

class Clock extends Component {
  state = {
    click: 108,
    date: new Date(),
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  handleClick = () => {
    this.setState(prevState => ({
      click: prevState.click + 1,
    }));
  }

  render() {
    const { click, date } = this.state;
    return (
      <button onClick={this.handleClick}>
        <h1>{click}</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </button>
    );
  }
}

export default Clock;
