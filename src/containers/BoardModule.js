import React, { Component } from 'react';
import { Panel, Table, Jumbotron } from 'react-bootstrap'

class BoardModule extends Component {
  render() {
    const { moduleName } = this.props.params
    return (
      <Panel>
        <div>{ moduleName === 'heartbeat' ? <h1>'ba boom... ba boom...'</h1> : 
                    <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Time</th>
                            <th>Exception</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>RFS</td>
                            <td>Last night</td>
                            <td>Infinite loop</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>COMPS</td>
                            <td>All the time</td>
                            <td>Stack Overflow</td>
                          </tr>
                        </tbody>
                      </Table> }</div>    
      </Panel>      
    );
  }
}

export default BoardModule;
