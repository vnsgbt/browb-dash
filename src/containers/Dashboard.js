import React, { Component } from 'react';
import NavLink from '../components/NavLink'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <ul>
          <li><NavLink to="/dashboard/quarantines">Quarantines</NavLink></li>
          <li><NavLink to="/dashboard/heartbeat">Heartbeat</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
