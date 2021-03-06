import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import { Button, PageHeader, Grid, Row, Col, Panel } from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          <PageHeader className="center">Dashboard</PageHeader>
        </div>        
           
        <div className="container">
          <Grid>
            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <Panel header={'Heartbeat'} bsStyle="primary">
                    <NavLink to="/dashboard/heartbeat"><Button>Check</Button></NavLink>
                </Panel>
              </Col>          
              <Col md={6} mdPull={6}>
                <Panel header={'Quarantines'} bsStyle="danger">
                  <NavLink to="/dashboard/quarantines"><Button>Too Many</Button></NavLink>
                </Panel>
              </Col>
            </Row>
          </Grid>   
        </div>
                <div className="container">
                  {this.props.children}
                </div>
      </div>
    );
  }
}

export default Dashboard;
