import React, { Component } from 'react';

class ToggleVisibility extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggle() {
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && <p>Something Important</p>}
      </div>
    );
  }
}


export default ToggleVisibility;
