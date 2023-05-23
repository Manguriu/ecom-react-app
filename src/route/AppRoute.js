import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserLogin from '../pages/UserLogin'
import ContactPage from '../pages/ContactPage'
import Purchase from '../pages/Purchase'
import PrivatePolicy from '../pages/PrivatePolicy'
import RefundPolicy from '../pages/RefundPolicy'
import CompanyProfile from '../pages/CompanyProfile'
import AboutCompany from '../pages/AboutCompany'
import ProductDetails from '../pages/ProductDetails'
import Notification from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={UserLogin}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/purchase" component={Purchase}/>
            <Route exact path="/policy" component={PrivatePolicy}/>
            <Route exact path="/refund" component={RefundPolicy}/>
            <Route exact path="/profile" component={CompanyProfile}/>
            <Route exact path="/about" component={AboutCompany}/>
            <Route exact path="/product" component={ProductDetails}/>
            <Route exact path="/notify" component={Notification}/>
            <Route exact path="/favourite" component={FavouritePage}/>
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute