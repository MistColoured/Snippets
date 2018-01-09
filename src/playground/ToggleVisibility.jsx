import React, { Component } from 'react';

class ToggleVisibility extends Component {
  state = {
    visibility: false
  }
  handleToggle = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && <p>ZZ Top</p>}
      </div>
    );
  }
}

export default ToggleVisibility;
