import React, { Component } from 'react';
import Allo from './Higher';

class Sample1 extends Component {
  HelloMessage(props) {
    return <div>Hello {props.text}</div>;
  }

  render() {
    const Prox = this.HelloMessage;
    const Hello = (props) => <div>Hello Arrow {props.name}</div>

    return <div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <this.HelloMessage text={"John3"} />
      <Prox />
      <Hello name={'Barrow'}/>
      <Allo />
    </div>
  }
}

export default Sample1;
