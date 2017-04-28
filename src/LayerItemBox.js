import React, { Component } from 'react';
import DummyModal from './DummyModal';

class LayerItemBox extends Component {
  render() {
    return <div>
      <div>
        <button onClick={ () => this.refs.modal1.openModal() }>Open modal</button>
      </div>
      <div>
        <DummyModal ref={'modal1'} message={'Hey Bob'} />
      </div>
    </div>;
  }
}

export default LayerItemBox;
