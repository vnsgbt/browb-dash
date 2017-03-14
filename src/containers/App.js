import React, { Component } from 'react';
import NavLink from '../components/NavLink'

class App extends Component {
  render() {
    return (
      <div>
        <h1>DashOps</h1>
          <ul role="nav">
            <li><NavLink to="/dashboard" onlyActiveOnIndex>Dashboard</NavLink></li>
            <li><NavLink to="/notification">Notification</NavLink></li>
            <li><NavLink to="/configuration">Configuration</NavLink></li>
          </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
