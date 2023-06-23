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
import CartPage from '../pages/CartPage'
import CategoryPage from '../pages/CategoryPage'
import ProductSub from '../pages/ProductSub'
import Search from '../pages/Search'
import UserRegistration from '../pages/UserRegistration'
import PasswordReset from '../pages/PasswordReset'
import ResetPage from '../pages/ResetPage'
import Profilepage from '../pages/Profilepage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            


            <Route exact path="/" render={(props)=> <HomePage {...props} key={Date.now()} />}/>
            <Route exact path="/login" render={(props)=> <UserLogin {...props} key={Date.now()} />}/>
            <Route exact path="/register" render={(props)=> <UserRegistration {...props} key={Date.now()} />}/>
            <Route exact path="/password/:id" render={(props)=> <ResetPage {...props} key={Date.now()} />}/>
            <Route exact path="/userprofile" render={(props)=> <Profilepage {...props} key={Date.now()} />}/>
            <Route exact path="/reset" render={(props)=> <PasswordReset {...props} key={Date.now()} />}/>
            <Route exact path="/contact" render={(props)=> <ContactPage {...props} key={Date.now()} />}/>
            <Route exact path="/purchase" render={(props)=> <Purchase {...props} key={Date.now()} />}/>
            <Route exact path="/policy" render={(props)=> <PrivatePolicy {...props} key={Date.now()} />}/>
            <Route exact path="/refund" render={(props)=> <RefundPolicy {...props} key={Date.now()} />}/>
            <Route exact path="/profile" render={(props)=> <CompanyProfile {...props} key={Date.now()} />}/>
            <Route exact path="/about" render={(props)=> <AboutCompany {...props} key={Date.now()} />}/>
            <Route exact path="/product/:code" render={(props)=> <ProductDetails {...props} key={Date.now()} />}/>
            <Route exact path="/notify" render={(props)=> <Notification {...props} key={Date.now()} />}/>
            <Route exact path="/favourite" render={(props)=> <FavouritePage {...props} key={Date.now()} />}/>
            <Route exact path="/cart" render={(props)=> <CartPage {...props} key={Date.now()} />}/>
            <Route exact path="/categorylist/:category" render={(props)=> <CategoryPage {...props} key={Date.now()} />}/>
            <Route exact path="/subcategorylist/:category/:sub_category" render={(props)=> <ProductSub {...props} key={Date.now()} />}/>
            <Route exact path="/productlistsearch/:searchkey" render={(props)=> <Search {...props} key={Date.now()} />}/>

            {/* <Route exact path="/login" component={UserLogin}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/purchase" component={Purchase}/>
            <Route exact path="/policy" component={PrivatePolicy}/>
            <Route exact path="/refund" component={RefundPolicy}/>
            <Route exact path="/profile" component={CompanyProfile}/>
            <Route exact path="/about" component={AboutCompany}/>
            <Route exact path="/product/:code" component={ProductDetails}/>
            <Route exact path="/notify" component={Notification}/>
            <Route exact path="/favourite" component={FavouritePage}/>
            <Route exact path="/cart" component={CartPage}/>
            <Route exact path="/categorylist/:category" component={CategoryPage}/>
            <Route exact path="/subcategorylist/:category/:sub_category" component={ProductSub}/> */}
            
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute