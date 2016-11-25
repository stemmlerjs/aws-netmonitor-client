import React, { PropTypes } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dashboardActionCreators from 'redux/modules/dashboard'

const actionCreators = {
  dashboardActionCreators
  // ...userActionCreators
}

const DashboardContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  },

  render () {
    return (
      <div>
        DashboardContainer
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(DashboardContainer)
