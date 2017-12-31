import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggleInterview extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false,
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
        <h1>Visibility Interview</h1>
        <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide' : 'Show'}</button>
        {this.state.visibility && <p>ZZ Top</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggleInterview />, document.getElementById('app'));
