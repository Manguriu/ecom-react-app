import React, { Component, Fragment } from 'react'
import Reset from '../components/common/Reset'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

export class PasswordReset extends Component {
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

        <Reset />
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

export default PasswordReset