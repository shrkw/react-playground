import React, { Component } from 'react';
import closable from './ModalClosable';

class DummyModal extends Component {
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
    console.log('unmounted');
  }
  updateFoo() {
    alert(this.props.message);
    this.props.closeModal();
  }
   render() {
     return <div>
       <span>Modal area is here.</span>
       <button onClick={this.updateFoo.bind(this)}>
         Update something: {this.props.message}
       </button>
       <button onClick={this.props.closeModal}>
         Close Modal area
       </button>
     </div>;
 }
};

export default closable(DummyModal);
