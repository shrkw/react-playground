import React, { Component } from 'react';

function closable(ComposedComponent) {
  class Wrapper extends Component {
   constructor() {
     super();
     this.state = { modalOpenState: false };
   }
   openModal() {
     this.setState({modalOpenState: true});
   }
   closeModal() {
     this.setState({modalOpenState: false});
   }
   render() {
     return this.state.modalOpenState ? <ComposedComponent {...this.props} closeModal={this.closeModal.bind(this)} /> : <div>without Modal</div>;
   }
 };
 return Wrapper;
}

export default closable;
