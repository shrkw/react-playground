import React, { Component } from 'react';
import closable from './ModalClosable';

const DummyModalStateless = ({closeModal}) =>
<div>
  <span>Modal area is here.</span>
  <button onClick={closeModal}>
    Close Modal area
  </button>
</div>;

export default closable(DummyModalStateless);
