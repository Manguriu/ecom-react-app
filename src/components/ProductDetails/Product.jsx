import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";

export class Product extends Component {
  constructor() {
    super();
  }

  //image loader
  imagOnclick(event) {
    let imgsrc = event.target.getAttribute("src");
    let imgPreview = document.getElementById("imgPreview");

    ReactDOM.findDOMNode(imgPreview).setAttribute("src", imgsrc);
  }

  priceOption(price, discount) {
    if (discount === "na") {
      return <p className="product-price-on-card">Price: Ksh : {price}</p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price: Ksh : {price} <br></br>
          Price: <strike className="text-warning"> Ksh {price}</strike>{" "}<br></br>
          Discount : {discount}
        </p>
      );
    }
  }

  render() {
    let AllData = this.props.data;
    let title = AllData["productlist"][0]["title"];
    let brand = AllData["productlist"][0]["brand"];
    let category = AllData["productlist"][0]["category"];
    let sub_category = AllData["productlist"][0]["sub_category"];
    let image = AllData["productlist"][0]["image"];
    let price = AllData["productlist"][0]["price"];
    let product_code = AllData["productlist"][0]["product_code"];
    let ratings = AllData["productlist"][0]["ratings"];
    let remark = AllData["productlist"][0]["remark"];
    let discount = AllData["productlist"][0]["discount"];
    let short_desc = AllData["productdetails"][0]["short_desc"];
    let size = AllData["productdetails"][0]["size"];
    let color = AllData["productdetails"][0]["color"];
    let image_1 = AllData["productdetails"][0]["image_1"];
    let image_2 = AllData["productdetails"][0]["image_2"];
    let image_3 = AllData["productdetails"][0]["image_3"];
    let image_4 = AllData["productdetails"][0]["image_4"];
    let long_desc = AllData["productdetails"][0]["long_desc"];

    var ColorDiv = "d-none";
    if (color !== "na") {
      let ColorArray = color.split(",");
      var colorOption = ColorArray.map((colorlist, i) => {
        return <option value={colorlist}>{colorlist}</option>;
      });
      ColorDiv = "";
    } else {
      ColorDiv = "d-none";
    }

    var SizeDiv = "d-none";
    if (size !== "na") {
      let SizeArray = size.split(",");
      var sizeOption = SizeArray.map((colorlist, i) => {
        return <option value={colorlist}>{colorlist}</option>;
      });
      SizeDiv = "";
    } else {
      SizeDiv = "d-none";
    }

    return (
      <Fragment>
        <Container fluid={true} className="BetweenTwoSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white pb-3 mt-4"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                  <img id="imgPreview" className="w-100" src={image} />
                  <Container className="my-3">
                    <Row>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imagOnclick}
                          className="w-100 p_sm_img"
                          alt=""
                          src={image_1}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imagOnclick}
                          className="w-100 p_sm_img"
                          alt=""
                          src={image_2}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imagOnclick}
                          className="w-100 p_sm_img"
                          alt=""
                          src={image_3}
                        />
                      </Col>
                      <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                        <img
                          onClick={this.imagOnclick}
                          className="w-100 p_sm_img"
                          alt=""
                          src={image_4}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                  <h5 className="Product-Name">{title}</h5>
                  <h6 className="section-sub-title">{short_desc}</h6>
                  {this.priceOption(price,discount)}

                  <h6 className="mt-2">
                    <b>Category</b>: <i>{category}</i>
                  </h6>
                  <h6 className="mt-2">
                    <b>Sub-Category</b>: <i>{sub_category}</i>
                  </h6>
                  <h6 className="mt-2">
                    <b>Brand</b>: <i>{brand}</i>
                  </h6>
                  <h6 className="mt-2">
                    <b>Product Code</b>: <i>{product_code}</i>
                  </h6>

                  <div className={ColorDiv}>
                    <h6 className="mt-2">
                      <b></b>:
                    </h6>
                    <select className="form-control form-select">
                      <option>Select a Color...</option>
                      {colorOption}
                    </select>
                  </div>

                  <div className={SizeDiv}>
                    <h6 className="mt-2">Choose SIze:</h6>
                    <select className="form-control form-select">
                      <option>Select a Size...</option>
                      {sizeOption}
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2">Choose Quantity:</h6>
                    <select className="form-control form-select">
                      <option>Select...</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                    </select>
                  </div>

                  <h6 className="mt-2">Quantity</h6>
                  <input
                    className="form-control text-center w-50"
                    type="number"
                  />

                  <div className="input-group mt-3">
                    <button className="btn site-btn m-1 ">
                      {" "}
                      <i className="fa fa-shopping-cart"></i> Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      {" "}
                      <i className="fa fa-heart"></i> Favourite
                    </button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <h6>{long_desc}</h6>
                </Col>

                <Col className="" md={6} lg={6} sm={12} xs={12}>
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className=" p-0 m-0">
                    <span className="Review-Title">Brian</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">kodi</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>

                  <p className=" p-0 m-0">
                    <span className="Review-Title">John doe</span>{" "}
                    <span className="text-success">
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>{" "}
                  </p>
                  <p>Great leap in Design and performance.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Product;
