// api to show the number of times the site has been visited

class AppURL {
  static BaseURL = "http://localhost:8000/api";
  static Details = this.BaseURL + "/getvisitor";
  static ContactDetails = this.BaseURL + "/getcontact";
  static SiteDetails = this.BaseURL + "/siteinfo";
  static AllCategory = this.BaseURL + "/categories";

  static AllProductsremark(remark) {
    return this.BaseURL + "/Productsbyremark/"+remark;
  }

  static AllProductscategory(category) {
    return this.BaseURL + "/Productsbycategory/"+category;
  }

  static AllProductssubcategory(category,sub_category) {
    return this.BaseURL + "/Productsbysubcategory/"+category+"/"+sub_category;
  }
  

}

export default AppURL;
