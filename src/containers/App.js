import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import NavLink from '../components/NavLink'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                DashOps
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem><NavLink to="/dashboard" onlyActiveOnIndex>Dashboard</NavLink></NavItem>
              <NavItem><NavLink to="/notification">Notification</NavLink></NavItem>
              <NavItem><NavLink to="/configuration">Configuration</NavLink></NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

        {this.props.children}

      </div>
    );
  }
}

export default App;
