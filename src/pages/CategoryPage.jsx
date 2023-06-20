import React, { Component } from 'react';
import { Fragment } from 'react';
import Category from '../components/ProductDetails/Category';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from 'axios';
import AppURL from '../api/AppURL';

export class CategoryPage extends Component {

constructor({match}){
    super();
    this.state={
        category:match.params.category,
        ProductData:[],
    }
}

componentDidMount(){
    window.scroll(0,0)
    axios
      .get(AppURL.AllProductscategory(this.state.category))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {});
    
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

        <Category  category={this.state.category} ProductData={this.state.ProductData}/>

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

export default CategoryPage