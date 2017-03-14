import React, { Component } from 'react';

class BoardModule extends Component {
  render() {
    const { moduleName } = this.props.params
    return (
      <div>{ moduleName }</div>
    );
  }
}

export default BoardModule;
