import React, { Component } from 'react';

import OptionModal from './OptionModal.jsx';

class Form extends Component {
  state = {
    value: '',
    selectedOption: undefined,
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${this.state.value}`);
    this.setState({
      selectedOption: this.state.value,
      value: '',
    });
  }
  handleCloseModal = () => {
    this.setState({
      selectedOption: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" value={this.state.value.toLowerCase()} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default Form;
