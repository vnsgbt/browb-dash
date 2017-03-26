import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import { loadUser, loadStarred } from '../actions'

const loadData = ({ user, loadUser, loadStarred }) => {
  loadUser(user, [ 'name' ])
  loadStarred(user)  
}

// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

var quanrantines = [{
  id: 1,
  name: 'RFS',
  time: '11/31/2016',
  exception: 'Infinite Loop',
  cost: '2M'
},{
  id: 2,
  name: 'COMPS',
  time: '2/30/2017',
  exception: 'Stack Overflow',
  cost: '3M'
}]

class BoardModule extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadStarred: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  render() {
    const { moduleName } = this.props.params
    return (
      <div className="container">
        <Panel>
          <div>{ moduleName === 'heartbeat' ? <h1>'ba boom... ba boom...'</h1> : 
            <BootstrapTable data={quanrantines} striped={true} hover={true}>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>App Name</TableHeaderColumn>
                <TableHeaderColumn dataField="time">Time</TableHeaderColumn>
                <TableHeaderColumn dataField="exception">Error</TableHeaderColumn>
                <TableHeaderColumn dataField="cost" dataFormat={priceFormatter}>Cost</TableHeaderColumn>
            </BootstrapTable> }
          </div>    
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = 'vnsgbt'

  const {
    pagination: { starredByUser },
    entities: { repos }
  } = state

  const pagination = starredByUser[user] || {ids: []}
  const starredRepo = pagination.ids.map(id => repos[id])

  return { user, starredRepo }
}

export default connect(mapStateToProps, { 
  loadUser, 
  loadStarred 
})(BoardModule);
