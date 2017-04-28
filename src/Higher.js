import React, { Component } from 'react';
import { Enhance } from "./Enhance";


const Allo = ({data}) => {
  if (!data) return <div>Waiting...</div>;
  return <div>{data}</div>;
};

class MyComponent {
  render() {
    if (!this.props.data) return <div>Waiting...</div>;
    return <div>{this.props.data}</div>;
  }
}

export default Enhance(Allo); // Enhanced component
