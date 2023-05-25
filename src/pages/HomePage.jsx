import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import TopHoome from "../components/home/TopHoome";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import TopMobile from "../components/home/TopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppURL from "../api/AppURL";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetDetails();

  }
// api to show the number of times the site has been visited

  GetDetails =()=>{
    axios.get(AppURL.Details).then().catch()
  }

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <TopHoome />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <TopMobile />
        </div>
        <FeaturedProducts />

        <NewArrival />

        <Categories />

        <Collection />

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
