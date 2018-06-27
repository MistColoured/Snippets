import React, { Component, Fragment } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
    click: 107,
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      click: prevState.click + 1,
    }));
  }

  render() {
    const { click, date } = this.state;
    if (click === 112) { throw new Error('I am definitely an error'); }
    return (
      <Fragment>
        <button
          type="submit"
          onClick={this.handleClick}
        >
          <h1>
            {click}
          </h1>
          <h1>
            {date.toLocaleTimeString()}
          </h1>
        </button>
      </Fragment>
    );
  }
}

export default Clock;
