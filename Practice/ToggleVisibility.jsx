import React, { Component } from 'react';
// import { Div, Paragraph } from './SomeStyle';

class ToggleVisibility extends Component {
  state = {
    visible: false,
  }

  handleToggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    const { visible } = this.state;
    const content = visible ? (
      <div>
        Hello
        <button onClick={this.handleToggle}>I am a button</button>
      </div>) : <div>Goodbye</div>;
    return (
      <div>
        <button onClick={this.handleToggle}>
          Show the content
        </button>
        {content}
      </div>
    );
  }
}

export default ToggleVisibility;
