import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Zumwalt</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/dashboard" onlyActiveOnIndex><NavItem>Dashboard</NavItem></LinkContainer>
              <LinkContainer to="/notification"><NavItem>Notification</NavItem></LinkContainer>
              <LinkContainer to="/configuration"><NavItem>Configuration</NavItem></LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

        {this.props.children}

      </div>
    );
  }
}

export default App;
