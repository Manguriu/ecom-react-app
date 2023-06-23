import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppURL from "../api/AppURL";
import Searchlist from "../components/ProductDetails/Searchlist";

export class Search extends Component {
  constructor({ match }) {
    super();
    this.state = {
      searchkey: match.params.searchkey,
      ProductData: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.SearchOption(this.state.searchkey))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment className="">
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Searchlist searchkey={this.state.searchkey} ProductData={this.state.ProductData}/>

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

export default Search;
