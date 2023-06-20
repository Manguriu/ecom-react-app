import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";
import Featuredloading from "../placeholder/Featuredloading";

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllProductsremark("Featured"))
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
    const Featured = this.state.ProductData;

    const MyView = Featured.map((Featured, i) => {
      if (Featured.discount === "na") {
        return (
          <Col className="p-1" xl={2} lg={2} md={2} sm={4} xm={6}>
            <Link to="/product">
              <Card className="image-box card">
                <img className="center" alt="" src={Featured.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Featured.title}</p>
                  <p className="product-price-on-card text-success">
                    Ksh:{Featured.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" xl={2} lg={2} md={2} sm={4} xm={6}>
            <Link to="/product">
              <Card className="image-box card">
                <img className="center" alt="" src={Featured.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Featured.title}</p>
                  <p className="product-price-on-card text-success">
                    <strike className="text-danger">
                      Ksh:{Featured.price}
                    </strike>
                    <br />
                    Discount:{Featured.discount}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Featuredloading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>All New Products</h2>
              <p className="">
                This are some of our featured products, Amazing Products you may
                like.
              </p>
            </div>

            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
