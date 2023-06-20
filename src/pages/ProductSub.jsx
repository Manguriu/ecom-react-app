import React, { Component, Fragment } from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from 'axios';
import AppURL from '../api/AppURL';
import CategorySub from '../components/ProductDetails/CategorySub';

export class ProductSub extends Component {
    constructor({match}){
        super();
        this.state={
            category:match.params.category,
            sub_category:match.params.sub_category,
            ProductData:[],
        }
    }
    
    componentDidMount(){
        window.scroll(0,0)
        axios
          .get(AppURL.AllProductssubcategory(this.state.category,this.state.sub_category))
          .then((response) => {
            this.setState({ ProductData: response.data });
          })
          .catch((error) => {});
        
    }


  render() {
    return (
      <Fragment>
        <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <CategorySub   category={this.state.category} sub_category={this.state.sub_category} ProductData={this.state.ProductData} />

        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
      </Fragment>
    )
  }
}

export default ProductSub