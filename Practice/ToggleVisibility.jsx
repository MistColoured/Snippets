import React, { Component } from 'react';
import { Div, Paragraph } from './SomeStyle';

class ToggleVisibility extends Component {
  state = {
    visible: false,
  }
  handleToggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Click Me</button>
        {this.state.visible ? 'True' : 'False'}
        {this.state.visible && <p>Top Secret</p>}
      </div>
    );
  }
}

export default ToggleVisibility;
