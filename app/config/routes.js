
import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, DashboardContainer, LogGroupsContainer, LogStreamsContainer } from 'modules'

export default function getRoutes() {
  return (
    <Router history={hashHistory} >
        <Route path='/' component={MainContainer}>
          <Route path='/dash' component={DashboardContainer} />
          <Route path='/groups' component={LogGroupsContainer} />
          <Route path='/groups/:logGroup' component={LogStreamsContainer} />
        </Route>
    </Router>
  )
}

