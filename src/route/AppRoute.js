import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserLogin from '../pages/UserLogin'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={UserLogin}/>
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute