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

import React, { useState } from 'react';
import Modal from 'boron/WaveModal';

const MockModal = (props) => {
  console.log(props.isVisible)
  return (
    <Modal
      className="welcome-modal max-modal"
      closeOnClick={false}
      keyboard={false}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h1>Mock Modal!</h1>
        </div>
        <div className="modal-body"></div>
      </div>
    </Modal>
    )
}

export default MockModal;