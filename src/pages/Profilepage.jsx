import React, { Component, Fragment } from 'react'
import Profile from '../components/common/Profile'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

export class Profilepage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
  render() {
    return (
        <Fragment>
        <div className="Desktop">
         <NavMenuDesktop />
       </div>
       <div className="Mobile">
         <NavMenuMobile />
       </div>

       <Profile />
       <div className="Desktop">
         <FooterDesktop />
       </div>

       <div className="Mobile">
         <FooterMobile />
       </div>
     </Fragment>
    )
  }
}

export default Profilepage