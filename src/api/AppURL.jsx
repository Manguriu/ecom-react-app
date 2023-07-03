// api to show the number of times the site has been visited

class AppURL {
  static BaseURL = "http://localhost:8000/api";
  static Details = this.BaseURL + "/getvisitor";
  static ContactDetails = this.BaseURL + "/getcontact";
  static SiteDetails = this.BaseURL + "/siteinfo";
  static AllCategory = this.BaseURL + "/categories";
  static SlideMenu = this.BaseURL + "/slidermenu";
  static NoftHistory = this.BaseURL + "/allNotification";
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForget = this.BaseURL + "/forgetpassword";
  static PassReset = this.BaseURL + "/resetpassword";

  static AllProductsremark(remark) {
    return this.BaseURL + "/Productsbyremark/" + remark;
  }

  static AllProductscategory(category) {
    return this.BaseURL + "/Productsbycategory/" + category;
  }

  static SearchOption(searchkey) {
    return this.BaseURL + "/search/" + searchkey;
  }

  static AllProductssubcategory(category, sub_category) {
    return (
      this.BaseURL + "/Productsbysubcategory/" + category + "/" + sub_category
    );
  }

  static ProductDetails(code) {
    return this.BaseURL + "/productdesc/" + code;
  }
}

export default AppURL;
