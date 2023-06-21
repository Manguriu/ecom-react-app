import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Product from "../components/ProductDetails/Product";
import Sugested from "../components/ProductDetails/Sugested";
import axios from "axios";
import AppURL from "../api/AppURL";
import Slider from "../components/placeholder/Slider";

export class ProductDetails extends Component {
  constructor({ match }) {
    super();
    this.state = {
      code: match.params.code,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetails(this.state.code))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
    if (this.state.mainDiv === "d-none") {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <Slider isLoading={this.state.isLoading} />

          <div className="Desktop">
            <FooterDesktop />
          </div>

          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <Product data={this.state.ProductData} />
          <Sugested />

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
}

export default ProductDetails;
