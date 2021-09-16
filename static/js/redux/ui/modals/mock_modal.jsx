/*
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

import React, { Component } from 'react';
import Modal from 'boron/WaveModal';
import PropTypes from 'prop-types';

class MockModal extends Component{
  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }

  render() {
    return(
      <Modal
        ref={(c) => { this.modal = c; }}
        closeOnClick={false}
        keyboard={false}
        onHide={this.props.toggleMockModal}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1>Mock Modal!</h1>
            <div
              className="modal-close"
              onClick={() => this.modal.hide()}
            >
              <i className="fa fa-times" />
            </div>
          </div>
          <div className="d-flex flex-column text-center">
            <p>First Name: { this.props.userInfo.userFirstName }</p>
            <p>Last Name: { this.props.userInfo.userLastName }</p>
            <p>Graduating class: { this.props.userInfo.class_year }</p>
          </div>
        </div>
      </Modal>
      )
  }
}

MockModal.propTypes = {
  toggleMockModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default MockModal;