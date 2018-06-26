import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    ariaHideApp={false}
    onRequestClose={props.handleClose}
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClose}>Okay</button>
  </Modal>
);

export default OptionModal;
