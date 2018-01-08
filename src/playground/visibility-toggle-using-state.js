import React, { Component } from 'react';

class VisibilityToggleInterview extends Component {
  state = {
    visibility: false
  }
  handleToggle = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }))
  }
  render() {
    const { visibility } = this.state
    return (
      <div>
        <button onClick={this.handleToggle}>{visibility ? 'Hide' : 'Show'}</button>
        {visibility && <p>ZZ Top</p>}
      </div>
    );
  }
}

export default VisibilityToggleInterview;
