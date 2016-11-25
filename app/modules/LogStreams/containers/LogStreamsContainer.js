import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dashboardActionCreators from 'redux/modules/dashboard'
import { pageContainer } from 'sharedStyles/styles.css'
import BreadCrumb from 'modules/LogGroups/components/BreadCrumb'

import { Link } from 'react-router'


const actionCreators = {
  dashboardActionCreators
  // ...userActionCreators
}

var groups = [{
  groupName: 'Evil Traffic',
  createdAt: 1480009235624,
  arn: 'arn:aws:logs:us-east-1:637106348934:log-group:/var/log/messages:*',
  streamNames: ['NodeAppServer1', 'NodeAppServer2', 'ManagementServer', 'DatabaseServer']
}, {
  groupName: 'Dropped Packets',
  createdAt: 1480009235624,
  arn: 'arn:aws:logs:us-east-1:637106348934:log-group:/var/log/messages:*',
  streamNames: ['NodeAppServer1', 'NodeAppServer2', 'ManagementServer', 'DatabaseServer']
}, {
  groupName: 'SSH Client Attempts',
  createdAt: 1480009235624,
  arn: 'arn:aws:logs:us-east-1:637106348934:log-group:/var/log/messages:*',
  streamNames: ['NodeAppServer1', 'NodeAppServer2', 'ManagementServer', 'DatabaseServer']
}, {
  groupName: '/var/log/messages',
  createdAt: 1480009235624,
  arn: 'arn:aws:logs:us-east-1:637106348934:log-group:/var/log/messages:*',
  streamNames: ['NodeAppServer1', 'NodeAppServer2', 'ManagementServer', 'DatabaseServer']
}]


const LogStreamsContainer = React.createClass({

  pageCrumbs: [{
    page: "Log Groups",
    link: "/groups"
  }],

  render () {
    return (
      <div className={ pageContainer + " container"}>
        <h1>Log Stream: </h1>
        <BreadCrumb currentCrumb="Log Groups" allCrumbs={this.pageCrumbs}/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Group Name</th>
              <th>Created At</th>
              <th>ARN</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              return <tr key={group.groupName}>
                  <th scope="row">{'>'}</th>
                  <td>
                    <Link to={"/groups/" + group.groupName}>{group.groupName}</Link>
                  </td>
                  <td>{group.createdAt}</td>
                  <td>@{group.arn}</td>
                </tr>
            })}
          </tbody>
        </table>
      </div>
    )
  },
})

function mapStateToProps({dashboard}) {
  return {
    dashboard: dashboard ? dashboard : {}
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(LogStreamsContainer)