import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class MouseMover extends Component {
  state = {
    x: 0,
    y: 0,
  }
  handleMouse = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }
  render() {
    const { x, y } = this.state;
    return (
      <Fragment>
        <div onMouseMove={this.handleMouse}><h1>Hello from Mike!</h1>
          <h1>Mouse position: {x}, {y}</h1>
        </div>
      </Fragment>
    );
  }
}

export default MouseMover;